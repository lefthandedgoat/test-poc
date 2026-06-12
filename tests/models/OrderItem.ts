// SYNCED - 2026-06-12
// Generated from ../../api/OnlineStore.Api/Models/OrderItem.cs
import { z } from 'zod';

export const OrderItem = z.object({
  id: z.number(),
  orderId: z.number(),
  productId: z.number(),
  productName: z.string(),
  quantity: z.number(),
  unitPrice: z.number(),
  subTotal: z.number(),
});

export type OrderItem = z.infer<typeof OrderItem>;
