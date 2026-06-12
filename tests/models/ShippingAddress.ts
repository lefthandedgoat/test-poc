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
