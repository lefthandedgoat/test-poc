import ky from 'ky';
import { test, expect } from 'vitest';
import { z } from 'zod';
import { HttpVerb } from './types';

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
export async function testEndpoint(uri: string, verb: HttpVerb, schema?: z.ZodTypeAny) {
  const { status, body } = await request(uri, verb);
  expect(status).toBeGreaterThanOrEqual(200);
  expect(status).toBeLessThan(600);
  if (schema && status >= 200 && status < 300) {
    const isList = !uri.includes('{id}');
    if (isList) {
      z.array(schema).parse(body);
    } else {
      schema.parse(body);
    }
  }
}

// ---------------------------------------------------------------------------
// Smoke-test helper: creates a single vitest test named "VERB - ENDPOINT"
// ---------------------------------------------------------------------------
export function smoke(uri: string, verb: HttpVerb, schema?: z.ZodTypeAny) {
  test(`${verb} - ${uri}`, async () => await testEndpoint(uri, verb, schema));
}
