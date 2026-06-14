// SYNCED - 2026-06-12
// Generated from ../../api/OnlineStore.Api/Models/Product.cs
import { z } from 'zod';

export const Product = z.object({
  id: z.number(),
  name: z.string().optional(),
  description: z.string().optional(),
  price: z.number(),
  categoryId: z.number(),
  stockQuantity: z.number(),
  imageUrl: z.string().optional(),
  createdAt: z.string().optional(),
});

export type Product = z.infer<typeof Product>;
