import { z } from 'zod';
import { OrderItemSchema } from './OrderItem';

export const OrderSchema = z.object({
  id: z.number(),
  customerId: z.number(),
  orderDate: z.string(),
  totalAmount: z.number(),
  status: z.string(),
  shippingAddressId: z.number(),
  items: z.array(OrderItemSchema),
});

export type Order = z.infer<typeof OrderSchema>;
