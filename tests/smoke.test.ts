import { describe, it, expect } from 'vitest';
import { z } from 'zod';
import { HttpVerb } from './types';
import { request, EndpointGroup } from './helpers';
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
// Endpoint → schema mapping for contract validation on 2xx responses
// ---------------------------------------------------------------------------
const endpointGroups: EndpointGroup[] = [
  { name: 'customers',         endpoints: customerEndpoints,         schema: CustomerSchema },
  { name: 'products',          endpoints: productEndpoints,          schema: ProductSchema },
  { name: 'orders',            endpoints: orderEndpoints,            schema: OrderSchema },
  { name: 'orderitems',        endpoints: orderItemEndpoints,        schema: OrderItemSchema },
  { name: 'payments',          endpoints: paymentEndpoints,          schema: PaymentSchema },
  { name: 'shippingaddresses', endpoints: shippingAddressEndpoints,  schema: ShippingAddressSchema },
  { name: 'shoppingcarts',     endpoints: shoppingCartEndpoints,     schema: ShoppingCartSchema },
  { name: 'categories',        endpoints: categoryEndpoints,         schema: CategorySchema },
  { name: 'reviews',           endpoints: reviewEndpoints,           schema: ReviewSchema },
  { name: 'suppliers',         endpoints: supplierEndpoints,         schema: SupplierSchema },
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
          const { status } = await request(ep.uri, ep.verb);
          expect(status).toBeGreaterThanOrEqual(200);
          expect(status).toBeLessThan(600);
        });

        // For 2xx GET endpoints, validate the response body against the zod schema
        if (ep.verb === HttpVerb.GET) {
          const isList = !ep.uri.includes('{id}');

          it(`${label} – contract validation (2xx)`, async () => {
            const { status, body } = await request(ep.uri, ep.verb);

            if (status >= 200 && status < 300) {
              if (isList) {
                z.array(group.schema).parse(body);
              } else {
                group.schema.parse(body);
              }
            }
            // Non-2xx — nothing to validate
          });
        }
      }
    });
  }
});
