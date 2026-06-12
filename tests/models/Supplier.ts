import { z } from 'zod';

export const SupplierSchema = z.object({
  id: z.number(),
  name: z.string(),
  contactName: z.string(),
  contactEmail: z.string(),
  contactPhone: z.string(),
  address: z.string(),
  createdAt: z.string(),
});

export type Supplier = z.infer<typeof SupplierSchema>;
