// SYNCED - 2026-06-12
// Generated from ../../api/OnlineStore.Api/Models/Payment.cs
import { z } from 'zod';

export const Payment = z.object({
  id: z.number(),
  orderId: z.number(),
  amount: z.number(),
  paymentMethod: z.string(),
  paymentDate: z.string(),
  status: z.string(),
  transactionId: z.string(),
});

export type Payment = z.infer<typeof Payment>;
