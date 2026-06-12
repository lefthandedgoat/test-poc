// SYNCED - 2026-06-12
// Generated from ../../api/OnlineStore.Api/Models/Supplier.cs
import { z } from 'zod';

export const Supplier = z.object({
  id: z.number(),
  name: z.string(),
  contactName: z.string(),
  contactEmail: z.string(),
  contactPhone: z.string(),
  address: z.string(),
  createdAt: z.string(),
});

export type Supplier = z.infer<typeof Supplier>;
