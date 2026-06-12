import { z } from 'zod';

export const CartItemSchema = z.object({
  productId: z.number(),
  productName: z.string(),
  unitPrice: z.number(),
  quantity: z.number(),
});

export type CartItem = z.infer<typeof CartItemSchema>;

export const ShoppingCartSchema = z.object({
  id: z.number(),
  customerId: z.number(),
  createdAt: z.string(),
  expiresAt: z.string().nullable(),
  items: z.array(CartItemSchema),
});

export type ShoppingCart = z.infer<typeof ShoppingCartSchema>;
