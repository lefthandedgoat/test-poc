import { z } from 'zod';

export const OrderItemSchema = z.object({
  id: z.number(),
  orderId: z.number(),
  productId: z.number(),
  productName: z.string(),
  quantity: z.number(),
  unitPrice: z.number(),
  subTotal: z.number(),
});

export type OrderItem = z.infer<typeof OrderItemSchema>;
