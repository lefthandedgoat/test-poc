// SYNCED - 2026-06-12
// Generated from ../../api/OnlineStore.Api/Models/Customer.cs
import { z } from 'zod';

export const Customer = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  phone: z.string(),
  createdAt: z.string(),
});

export type Customer = z.infer<typeof Customer>;
