// SYNCED - 2026-06-12
// Generated from ../../api/OnlineStore.Api/Models/Product.cs
import { z } from 'zod';

export const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  categoryId: z.number(),
  stockQuantity: z.number(),
  imageUrl: z.string(),
  createdAt: z.string(),
});

export type Product = z.infer<typeof ProductSchema>;
