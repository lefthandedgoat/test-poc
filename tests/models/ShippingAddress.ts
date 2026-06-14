// SYNCED - 2026-06-12
// Generated from ../../api/OnlineStore.Api/Models/ShippingAddress.cs
import { z } from 'zod';

export const ShippingAddress = z.object({
  id: z.number(),
  customerId: z.number(),
  street: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zipCode: z.string().optional(),
  country: z.string().optional(),
  isDefault: z.boolean(),
});

export type ShippingAddress = z.infer<typeof ShippingAddress>;
