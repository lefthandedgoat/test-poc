// SYNCED - 2026-06-12
// Generated from ../../api/OnlineStore.Api/Models/Payment.cs
import { z } from 'zod';

export const Payment = z.object({
  id: z.number(),
  orderId: z.number(),
  amount: z.number(),
  paymentMethod: z.string().optional(),
  paymentDate: z.string().optional(),
  status: z.string().optional(),
  transactionId: z.string().optional(),
});

export type Payment = z.infer<typeof Payment>;
