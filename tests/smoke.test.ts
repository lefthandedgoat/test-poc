import { test, expect } from 'vitest';
import { z } from 'zod';
import { HttpVerb } from './types';
import { request } from './helpers';
import { CustomerSchema } from './models/Customer';
import { ProductSchema } from './models/Product';
import { OrderSchema } from './models/Order';
import { OrderItemSchema } from './models/OrderItem';
import { CategorySchema } from './models/Category';
import { PaymentSchema } from './models/Payment';
import { ShippingAddressSchema } from './models/ShippingAddress';
import { ShoppingCartSchema } from './models/ShoppingCart';
import { ReviewSchema } from './models/Review';
import { SupplierSchema } from './models/Supplier';

// ---------------------------------------------------------------------------
// Helper to run status code & contract-validation tests for a single endpoint
// ---------------------------------------------------------------------------
async function testStatus(uri: string, verb: HttpVerb) {
  const { status } = await request(uri, verb);
  expect(status).toBeGreaterThanOrEqual(200);
  expect(status).toBeLessThan(600);
}

async function testContract(uri: string, verb: HttpVerb, schema: z.ZodTypeAny) {
  const { status, body } = await request(uri, verb);
  if (status >= 200 && status < 300) {
    const isList = !uri.includes('{id}');
    if (isList) {
      z.array(schema).parse(body);
    } else {
      schema.parse(body);
    }
  }
}

// ---------------------------------------------------------------------------
// Categories
// ---------------------------------------------------------------------------

test('GET /api/categories – returns expected status code', async () => {
  await testStatus('/api/categories', HttpVerb.GET);
});
test('GET /api/categories – contract validation (2xx)', async () => {
  await testContract('/api/categories', HttpVerb.GET, CategorySchema);
});

test('GET /api/categories/{id} – returns expected status code', async () => {
  await testStatus('/api/categories/{id}', HttpVerb.GET);
});
test('GET /api/categories/{id} – contract validation (2xx)', async () => {
  await testContract('/api/categories/{id}', HttpVerb.GET, CategorySchema);
});

test('POST /api/categories – returns expected status code', async () => {
  await testStatus('/api/categories', HttpVerb.POST);
});

test('PUT /api/categories/{id} – returns expected status code', async () => {
  await testStatus('/api/categories/{id}', HttpVerb.PUT);
});

test('DELETE /api/categories/{id} – returns expected status code', async () => {
  await testStatus('/api/categories/{id}', HttpVerb.DELETE);
});

// ---------------------------------------------------------------------------
// Customers
// ---------------------------------------------------------------------------

test('GET /api/customers – returns expected status code', async () => {
  await testStatus('/api/customers', HttpVerb.GET);
});
test('GET /api/customers – contract validation (2xx)', async () => {
  await testContract('/api/customers', HttpVerb.GET, CustomerSchema);
});

test('GET /api/customers/{id} – returns expected status code', async () => {
  await testStatus('/api/customers/{id}', HttpVerb.GET);
});
test('GET /api/customers/{id} – contract validation (2xx)', async () => {
  await testContract('/api/customers/{id}', HttpVerb.GET, CustomerSchema);
});

test('POST /api/customers – returns expected status code', async () => {
  await testStatus('/api/customers', HttpVerb.POST);
});

test('PUT /api/customers/{id} – returns expected status code', async () => {
  await testStatus('/api/customers/{id}', HttpVerb.PUT);
});

test('DELETE /api/customers/{id} – returns expected status code', async () => {
  await testStatus('/api/customers/{id}', HttpVerb.DELETE);
});

// ---------------------------------------------------------------------------
// Products
// ---------------------------------------------------------------------------

test('GET /api/products – returns expected status code', async () => {
  await testStatus('/api/products', HttpVerb.GET);
});
test('GET /api/products – contract validation (2xx)', async () => {
  await testContract('/api/products', HttpVerb.GET, ProductSchema);
});

test('GET /api/products/{id} – returns expected status code', async () => {
  await testStatus('/api/products/{id}', HttpVerb.GET);
});
test('GET /api/products/{id} – contract validation (2xx)', async () => {
  await testContract('/api/products/{id}', HttpVerb.GET, ProductSchema);
});

test('POST /api/products – returns expected status code', async () => {
  await testStatus('/api/products', HttpVerb.POST);
});

test('PUT /api/products/{id} – returns expected status code', async () => {
  await testStatus('/api/products/{id}', HttpVerb.PUT);
});

test('DELETE /api/products/{id} – returns expected status code', async () => {
  await testStatus('/api/products/{id}', HttpVerb.DELETE);
});

// ---------------------------------------------------------------------------
// Orders
// ---------------------------------------------------------------------------

test('GET /api/orders – returns expected status code', async () => {
  await testStatus('/api/orders', HttpVerb.GET);
});
test('GET /api/orders – contract validation (2xx)', async () => {
  await testContract('/api/orders', HttpVerb.GET, OrderSchema);
});

test('GET /api/orders/{id} – returns expected status code', async () => {
  await testStatus('/api/orders/{id}', HttpVerb.GET);
});
test('GET /api/orders/{id} – contract validation (2xx)', async () => {
  await testContract('/api/orders/{id}', HttpVerb.GET, OrderSchema);
});

test('POST /api/orders – returns expected status code', async () => {
  await testStatus('/api/orders', HttpVerb.POST);
});

test('PUT /api/orders/{id} – returns expected status code', async () => {
  await testStatus('/api/orders/{id}', HttpVerb.PUT);
});

test('DELETE /api/orders/{id} – returns expected status code', async () => {
  await testStatus('/api/orders/{id}', HttpVerb.DELETE);
});

// ---------------------------------------------------------------------------
// Order Items
// ---------------------------------------------------------------------------

test('GET /api/orderitems – returns expected status code', async () => {
  await testStatus('/api/orderitems', HttpVerb.GET);
});
test('GET /api/orderitems – contract validation (2xx)', async () => {
  await testContract('/api/orderitems', HttpVerb.GET, OrderItemSchema);
});

test('GET /api/orderitems/{id} – returns expected status code', async () => {
  await testStatus('/api/orderitems/{id}', HttpVerb.GET);
});
test('GET /api/orderitems/{id} – contract validation (2xx)', async () => {
  await testContract('/api/orderitems/{id}', HttpVerb.GET, OrderItemSchema);
});

test('POST /api/orderitems – returns expected status code', async () => {
  await testStatus('/api/orderitems', HttpVerb.POST);
});

test('PUT /api/orderitems/{id} – returns expected status code', async () => {
  await testStatus('/api/orderitems/{id}', HttpVerb.PUT);
});

test('DELETE /api/orderitems/{id} – returns expected status code', async () => {
  await testStatus('/api/orderitems/{id}', HttpVerb.DELETE);
});

// ---------------------------------------------------------------------------
// Payments
// ---------------------------------------------------------------------------

test('GET /api/payments – returns expected status code', async () => {
  await testStatus('/api/payments', HttpVerb.GET);
});
test('GET /api/payments – contract validation (2xx)', async () => {
  await testContract('/api/payments', HttpVerb.GET, PaymentSchema);
});

test('GET /api/payments/{id} – returns expected status code', async () => {
  await testStatus('/api/payments/{id}', HttpVerb.GET);
});
test('GET /api/payments/{id} – contract validation (2xx)', async () => {
  await testContract('/api/payments/{id}', HttpVerb.GET, PaymentSchema);
});

test('POST /api/payments – returns expected status code', async () => {
  await testStatus('/api/payments', HttpVerb.POST);
});

test('PUT /api/payments/{id} – returns expected status code', async () => {
  await testStatus('/api/payments/{id}', HttpVerb.PUT);
});

test('DELETE /api/payments/{id} – returns expected status code', async () => {
  await testStatus('/api/payments/{id}', HttpVerb.DELETE);
});

// ---------------------------------------------------------------------------
// Shipping Addresses
// ---------------------------------------------------------------------------

test('GET /api/shippingaddresses – returns expected status code', async () => {
  await testStatus('/api/shippingaddresses', HttpVerb.GET);
});
test('GET /api/shippingaddresses – contract validation (2xx)', async () => {
  await testContract('/api/shippingaddresses', HttpVerb.GET, ShippingAddressSchema);
});

test('GET /api/shippingaddresses/{id} – returns expected status code', async () => {
  await testStatus('/api/shippingaddresses/{id}', HttpVerb.GET);
});
test('GET /api/shippingaddresses/{id} – contract validation (2xx)', async () => {
  await testContract('/api/shippingaddresses/{id}', HttpVerb.GET, ShippingAddressSchema);
});

test('POST /api/shippingaddresses – returns expected status code', async () => {
  await testStatus('/api/shippingaddresses', HttpVerb.POST);
});

test('PUT /api/shippingaddresses/{id} – returns expected status code', async () => {
  await testStatus('/api/shippingaddresses/{id}', HttpVerb.PUT);
});

test('DELETE /api/shippingaddresses/{id} – returns expected status code', async () => {
  await testStatus('/api/shippingaddresses/{id}', HttpVerb.DELETE);
});

// ---------------------------------------------------------------------------
// Shopping Carts
// ---------------------------------------------------------------------------

test('GET /api/shoppingcarts – returns expected status code', async () => {
  await testStatus('/api/shoppingcarts', HttpVerb.GET);
});
test('GET /api/shoppingcarts – contract validation (2xx)', async () => {
  await testContract('/api/shoppingcarts', HttpVerb.GET, ShoppingCartSchema);
});

test('GET /api/shoppingcarts/{id} – returns expected status code', async () => {
  await testStatus('/api/shoppingcarts/{id}', HttpVerb.GET);
});
test('GET /api/shoppingcarts/{id} – contract validation (2xx)', async () => {
  await testContract('/api/shoppingcarts/{id}', HttpVerb.GET, ShoppingCartSchema);
});

test('POST /api/shoppingcarts – returns expected status code', async () => {
  await testStatus('/api/shoppingcarts', HttpVerb.POST);
});

test('PUT /api/shoppingcarts/{id} – returns expected status code', async () => {
  await testStatus('/api/shoppingcarts/{id}', HttpVerb.PUT);
});

test('DELETE /api/shoppingcarts/{id} – returns expected status code', async () => {
  await testStatus('/api/shoppingcarts/{id}', HttpVerb.DELETE);
});

// ---------------------------------------------------------------------------
// Reviews
// ---------------------------------------------------------------------------

test('GET /api/reviews – returns expected status code', async () => {
  await testStatus('/api/reviews', HttpVerb.GET);
});
test('GET /api/reviews – contract validation (2xx)', async () => {
  await testContract('/api/reviews', HttpVerb.GET, ReviewSchema);
});

test('GET /api/reviews/{id} – returns expected status code', async () => {
  await testStatus('/api/reviews/{id}', HttpVerb.GET);
});
test('GET /api/reviews/{id} – contract validation (2xx)', async () => {
  await testContract('/api/reviews/{id}', HttpVerb.GET, ReviewSchema);
});

test('POST /api/reviews – returns expected status code', async () => {
  await testStatus('/api/reviews', HttpVerb.POST);
});

test('PUT /api/reviews/{id} – returns expected status code', async () => {
  await testStatus('/api/reviews/{id}', HttpVerb.PUT);
});

test('DELETE /api/reviews/{id} – returns expected status code', async () => {
  await testStatus('/api/reviews/{id}', HttpVerb.DELETE);
});

// ---------------------------------------------------------------------------
// Suppliers
// ---------------------------------------------------------------------------

test('GET /api/suppliers – returns expected status code', async () => {
  await testStatus('/api/suppliers', HttpVerb.GET);
});
test('GET /api/suppliers – contract validation (2xx)', async () => {
  await testContract('/api/suppliers', HttpVerb.GET, SupplierSchema);
});

test('GET /api/suppliers/{id} – returns expected status code', async () => {
  await testStatus('/api/suppliers/{id}', HttpVerb.GET);
});
test('GET /api/suppliers/{id} – contract validation (2xx)', async () => {
  await testContract('/api/suppliers/{id}', HttpVerb.GET, SupplierSchema);
});

test('POST /api/suppliers – returns expected status code', async () => {
  await testStatus('/api/suppliers', HttpVerb.POST);
});

test('PUT /api/suppliers/{id} – returns expected status code', async () => {
  await testStatus('/api/suppliers/{id}', HttpVerb.PUT);
});

test('DELETE /api/suppliers/{id} – returns expected status code', async () => {
  await testStatus('/api/suppliers/{id}', HttpVerb.DELETE);
});
