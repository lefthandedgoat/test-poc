// SYNCED - 2026-06-12
// Generated from ../../api/OnlineStore.Api/Models/Customer.cs
import { z } from 'zod';

export const Customer = z.object({
  id: z.number(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  createdAt: z.string().optional(),
});

export type Customer = z.infer<typeof Customer>;
