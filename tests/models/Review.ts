// SYNCED - 2026-06-12
// Generated from ../../api/OnlineStore.Api/Models/Review.cs
import { z } from 'zod';

export const Review = z.object({
  id: z.number(),
  productId: z.number(),
  customerId: z.number(),
  rating: z.number(),
  title: z.string().optional(),
  comment: z.string().optional(),
  createdAt: z.string().optional(),
});

export type Review = z.infer<typeof Review>;
