// SYNCED - 2026-06-12
// Generated from ../../api/OnlineStore.Api/Models/Category.cs
import { z } from 'zod';

export const Category = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  parentCategoryId: z.number().nullable(),
});

export type Category = z.infer<typeof Category>;
