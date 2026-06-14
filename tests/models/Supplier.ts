// SYNCED - 2026-06-12
// Generated from ../../api/OnlineStore.Api/Models/Supplier.cs
import { z } from 'zod';

export const Supplier = z.object({
  id: z.number(),
  name: z.string().optional(),
  contactName: z.string().optional(),
  contactEmail: z.string().optional(),
  contactPhone: z.string().optional(),
  address: z.string().optional(),
  createdAt: z.string().optional(),
});

export type Supplier = z.infer<typeof Supplier>;
