import { describe, it, expect } from 'vitest';
import ky from 'ky';
import { HttpVerb } from './types';
import { customerEndpoints } from './endpoints/customers';
import { productEndpoints } from './endpoints/products';
import { orderEndpoints } from './endpoints/orders';
import { orderItemEndpoints } from './endpoints/orderitems';
import { paymentEndpoints } from './endpoints/payments';
import { shippingAddressEndpoints } from './endpoints/shippingaddresses';
import { shoppingCartEndpoints } from './endpoints/shoppingcarts';
import { categoryEndpoints } from './endpoints/categories';
import { reviewEndpoints } from './endpoints/reviews';
import { supplierEndpoints } from './endpoints/suppliers';
import type { Customer } from './models/Customer';
import type { Product } from './models/Product';
import type { Order } from './models/Order';
import type { OrderItem } from './models/OrderItem';
import type { Category } from './models/Category';
import type { Payment } from './models/Payment';
import type { ShippingAddress } from './models/ShippingAddress';
import type { ShoppingCart } from './models/ShoppingCart';
import type { CartItem } from './models/ShoppingCart';
import type { Review } from './models/Review';
import type { Supplier } from './models/Supplier';

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------
const BASE_URL = 'http://localhost:5050';

/** Substitute `{id}` placeholders in a URI with a test value */
function resolveUri(uri: string): string {
  return uri.replace(/\{id\}/g, '1');
}

// ---------------------------------------------------------------------------
// Helper: perform a request using ky, return the response & parsed body
// ---------------------------------------------------------------------------
async function request(uri: string, verb: HttpVerb): Promise<{ status: number; body: unknown }> {
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
// Contract-assertion helpers
// ---------------------------------------------------------------------------
function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function isNumber(value: unknown): boolean {
  return typeof value === 'number';
}

function isString(value: unknown): boolean {
  return typeof value === 'string';
}

function isBoolean(value: unknown): boolean {
  return typeof value === 'boolean';
}

function isNumberOrNull(value: unknown): boolean {
  return value === null || typeof value === 'number';
}

function isStringOrNull(value: unknown): boolean {
  return value === null || typeof value === 'string';
}

/** Generic shape type derived from a model interface T */
type ModelShape<T> = Record<keyof T, (v: unknown) => boolean>;

/** Assert that a value is a non-null object matching the given model shape */
function assertContract<T>(
  body: unknown,
  shape: ModelShape<T>,
): void {
  expect(isRecord(body)).toBe(true);
  const obj = body as Record<string, unknown>;
  for (const [key, validator] of Object.entries(shape) as [string, (v: unknown) => boolean][]) {
    expect([key, validator(obj[key])]).toEqual([key, true]);
  }
}

/** Assert that every element in an array matches the given model shape */
function assertArrayContract<T>(
  body: unknown,
  shape: ModelShape<T>,
): void {
  expect(Array.isArray(body)).toBe(true);
  const arr = body as unknown[];
  for (const item of arr) {
    assertContract<T>(item, shape);
  }
}

// ---------------------------------------------------------------------------
// Shape definitions typed against the model interfaces from ./models/
// ---------------------------------------------------------------------------

const customerShape: ModelShape<Customer> = {
  id: isNumber,
  firstName: isString,
  lastName: isString,
  email: isString,
  phone: isString,
  createdAt: isString,
};

const productShape: ModelShape<Product> = {
  id: isNumber,
  name: isString,
  description: isString,
  price: isNumber,
  categoryId: isNumber,
  stockQuantity: isNumber,
  imageUrl: isString,
  createdAt: isString,
};

const categoryShape: ModelShape<Category> = {
  id: isNumber,
  name: isString,
  description: isString,
  parentCategoryId: isNumberOrNull,
};

const orderItemShape: ModelShape<OrderItem> = {
  id: isNumber,
  orderId: isNumber,
  productId: isNumber,
  productName: isString,
  quantity: isNumber,
  unitPrice: isNumber,
  subTotal: isNumber,
};

const orderShape: ModelShape<Order> = {
  id: isNumber,
  customerId: isNumber,
  orderDate: isString,
  totalAmount: isNumber,
  status: isString,
  shippingAddressId: isNumber,
  items: (v: unknown) => {
    expect(Array.isArray(v)).toBe(true);
    const arr = v as unknown[];
    for (const item of arr) assertContract<OrderItem>(item, orderItemShape);
    return true;
  },
};

const paymentShape: ModelShape<Payment> = {
  id: isNumber,
  orderId: isNumber,
  amount: isNumber,
  paymentMethod: isString,
  paymentDate: isString,
  status: isString,
  transactionId: isString,
};

const cartItemShape: ModelShape<CartItem> = {
  productId: isNumber,
  productName: isString,
  unitPrice: isNumber,
  quantity: isNumber,
};

const shoppingCartShape: ModelShape<ShoppingCart> = {
  id: isNumber,
  customerId: isNumber,
  createdAt: isString,
  expiresAt: isStringOrNull,
  items: (v: unknown) => {
    expect(Array.isArray(v)).toBe(true);
    const arr = v as unknown[];
    for (const item of arr) assertContract<CartItem>(item, cartItemShape);
    return true;
  },
};

const shippingAddressShape: ModelShape<ShippingAddress> = {
  id: isNumber,
  customerId: isNumber,
  street: isString,
  city: isString,
  state: isString,
  zipCode: isString,
  country: isString,
  isDefault: isBoolean,
};

const reviewShape: ModelShape<Review> = {
  id: isNumber,
  productId: isNumber,
  customerId: isNumber,
  rating: isNumber,
  title: isString,
  comment: isString,
  createdAt: isString,
};

const supplierShape: ModelShape<Supplier> = {
  id: isNumber,
  name: isString,
  contactName: isString,
  contactEmail: isString,
  contactPhone: isString,
  address: isString,
  createdAt: isString,
};

// ---------------------------------------------------------------------------
// Endpoint → shape mapping for contract validation on 2xx responses
// ---------------------------------------------------------------------------
type EndpointGroup = {
  name: string;
  endpoints: { uri: string; verb: HttpVerb }[];
  listShape: ModelShape<any>;
  detailShape: ModelShape<any>;
};

const endpointGroups: EndpointGroup[] = [
  { name: 'customers',         endpoints: customerEndpoints,         listShape: customerShape,        detailShape: customerShape },
  { name: 'products',          endpoints: productEndpoints,          listShape: productShape,         detailShape: productShape },
  { name: 'orders',            endpoints: orderEndpoints,            listShape: orderShape,           detailShape: orderShape },
  { name: 'orderitems',        endpoints: orderItemEndpoints,        listShape: orderItemShape,       detailShape: orderItemShape },
  { name: 'payments',          endpoints: paymentEndpoints,          listShape: paymentShape,         detailShape: paymentShape },
  { name: 'shippingaddresses', endpoints: shippingAddressEndpoints,  listShape: shippingAddressShape, detailShape: shippingAddressShape },
  { name: 'shoppingcarts',     endpoints: shoppingCartEndpoints,     listShape: shoppingCartShape,    detailShape: shoppingCartShape },
  { name: 'categories',        endpoints: categoryEndpoints,         listShape: categoryShape,        detailShape: categoryShape },
  { name: 'reviews',           endpoints: reviewEndpoints,           listShape: reviewShape,          detailShape: reviewShape },
  { name: 'suppliers',         endpoints: supplierEndpoints,         listShape: supplierShape,        detailShape: supplierShape },
];

// ---------------------------------------------------------------------------
// Smoke tests
// ---------------------------------------------------------------------------
describe('OnlineStore API – smoke tests', () => {
  for (const group of endpointGroups) {
    describe(group.name, () => {
      for (const ep of group.endpoints) {
        const label = `${ep.verb} ${ep.uri}`;

        it(`${label} – returns expected status code`, async () => {
          const { status, body } = await request(ep.uri, ep.verb);
          expect(status).toBeGreaterThanOrEqual(200);
          expect(status).toBeLessThan(600);
        });

        // For 2xx GET endpoints, validate the response body contract
        if (ep.verb === HttpVerb.GET) {
          const isList = !ep.uri.includes('{id}');

          it(`${label} – contract validation (2xx)`, async () => {
            const { status, body } = await request(ep.uri, ep.verb);

            if (status >= 200 && status < 300) {
              if (isList) {
                assertArrayContract(body, group.listShape);
              } else {
                assertContract(body, group.detailShape);
              }
            } else {
              // Non-2xx — nothing to validate
            }
          });
        }
      }
    });
  }
});
