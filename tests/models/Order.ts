// SYNCED - 2026-06-12
// Generated from ../../api/OnlineStore.Api/Models/Order.cs
import { z } from 'zod';
import { OrderItem } from './OrderItem';

export const Order = z.object({
  id: z.number(),
  customerId: z.number(),
  orderDate: z.string(),
  totalAmount: z.number(),
  status: z.string(),
  shippingAddressId: z.number(),
  items: z.array(OrderItem),
});

export type Order = z.infer<typeof Order>;
