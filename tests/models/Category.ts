import { z } from 'zod';

export const CategorySchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  parentCategoryId: z.number().nullable(),
});

export type Category = z.infer<typeof CategorySchema>;
