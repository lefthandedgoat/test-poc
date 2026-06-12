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
