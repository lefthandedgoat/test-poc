import ky from 'ky';
import { test, expect } from 'vitest';
import { z } from 'zod';
import { HttpVerb } from './types';
import { Data, Category, Product, Review } from '../models';
import { test_Customer, test_OrderItem, test_Payment, test_Product, test_Review, test_ShippingAddress, test_ShoppingCart } from '../test_Data/all';

export type Test = {
  description: string;
  step: 'sign up' | 'shop' | 'checked out' | 'review';
  customize?: Data[];
  test: (b: Data) => void;
}

// ---------------------------------------------------------------------------
// Helper: wrap a schema to indicate the endpoint returns an array
// ---------------------------------------------------------------------------
/** Mark a schema as being for a list (array) endpoint */
export function list<T extends z.ZodTypeAny>(schema: T): z.ZodArray<T> {
  return z.array(schema);
}

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------
export const BASE_URL = 'http://localhost:5050';

/** Substitute `{id}` placeholders in a URI with a test value */
export function resolveUri(uri: string): string {
  return uri.replace(/\{id\}/g, '1');
}

// ---------------------------------------------------------------------------
// Helper: perform a request using ky, return the response & parsed body
// ---------------------------------------------------------------------------
export async function request(uri: string, verb: HttpVerb): Promise<{ status: number; body: unknown }> {
  const url = `${BASE_URL}${resolveUri(uri)}`;
  const method = verb as string; // ky accepts GET | POST | PUT | PATCH | DELETE | ...

  const response = await ky(url, {
    method,
    // Some servers may reject empty POST/PUT bodies – send an empty JSON object
    ...(verb === HttpVerb.POST || verb === HttpVerb.PUT
      ? { json: {} as Record<string, never> }
      : {}),
    // Prevent ky from throwing on non-2xx so we can assert status ourselves
    throwHttpErrors: false,
  });

  let body: unknown;
  try {
    body = await response.json();
  } catch {
    body = null;
  }

  return { status: response.status, body };
}

// ---------------------------------------------------------------------------
// Helper: run status & contract-validation tests for a single endpoint
// ---------------------------------------------------------------------------
export async function testEndpoint(uri: string, verb: HttpVerb, schema: z.ZodTypeAny) {
  const { status, body } = await request(uri, verb);
  expect(status).toBeGreaterThanOrEqual(200);
  expect(status).toBeLessThan(600);
  if (status >= 200 && status < 300) {
    schema.parse(body);
  }
}

// ---------------------------------------------------------------------------
// Smoke-test helper: creates a single vitest test named "VERB - ENDPOINT"
// ---------------------------------------------------------------------------
export function smoke(uri: string, schema: z.ZodTypeAny, verb: HttpVerb = HttpVerb.GET) {
  test(`${verb} - ${uri}`, async () => await testEndpoint(uri, verb, schema));
}

export function workflow(testt: Test) {
  let customize = testt.customize && testt.customize.length ? testt.customize : [{}];
  customize.forEach((data, i) => {
    switch (testt.step) {
      case 'sign up': {
        data = {... data, ...test_Customer(data)()};
      }
      case 'checked out': {
        data = {... data, ...test_Product(data)()};
        data = {... data, ...test_OrderItem(data)()};
        data = {... data, ...test_Payment(data)()};
        data = {... data, ...test_ShoppingCart(data)()};
        data = {... data, ...test_ShippingAddress(data)()};
      }
      case 'review': {
        data = {... data, ...test_Review(data)()};
      }
      case 'shop': {
        data = {... data, ...test_Product(data)()};
        data = {... data, ...test_ShoppingCart(data)()};
      }
    }

    test(`${testt.description} - ${i + 1}`, async () => {
      await testt.test(data);
    });  
  });
}
