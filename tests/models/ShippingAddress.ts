// SYNCED - 2026-06-12
// Generated from ../../api/OnlineStore.Api/Models/ShippingAddress.cs
import { z } from 'zod';

export const ShippingAddressSchema = z.object({
  id: z.number(),
  customerId: z.number(),
  street: z.string(),
  city: z.string(),
  state: z.string(),
  zipCode: z.string(),
  country: z.string(),
  isDefault: z.boolean(),
});

export type ShippingAddress = z.infer<typeof ShippingAddressSchema>;
