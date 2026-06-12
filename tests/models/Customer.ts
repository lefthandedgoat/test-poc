import { z } from 'zod';

export const CustomerSchema = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  phone: z.string(),
  createdAt: z.string(),
});

export type Customer = z.infer<typeof CustomerSchema>;
