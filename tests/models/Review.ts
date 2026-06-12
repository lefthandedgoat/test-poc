// SYNCED - 2026-06-12
// Generated from ../../api/OnlineStore.Api/Models/Review.cs
import { z } from 'zod';

export const ReviewSchema = z.object({
  id: z.number(),
  productId: z.number(),
  customerId: z.number(),
  rating: z.number(),
  title: z.string(),
  comment: z.string(),
  createdAt: z.string(),
});

export type Review = z.infer<typeof ReviewSchema>;
