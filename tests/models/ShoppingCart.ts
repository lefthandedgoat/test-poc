// SYNCED - 2026-06-12
// Generated from ../../api/OnlineStore.Api/Models/ShoppingCart.cs
import { z } from 'zod';

export const CartItem = z.object({
  productId: z.number(),
  productName: z.string(),
  unitPrice: z.number(),
  quantity: z.number(),
});

export type CartItem = z.infer<typeof CartItem>;

export const ShoppingCart = z.object({
  id: z.number(),
  customerId: z.number(),
  createdAt: z.string(),
  expiresAt: z.string().nullable(),
  items: z.array(CartItem),
});

export type ShoppingCart = z.infer<typeof ShoppingCart>;
