export interface Payment {
  id: number;
  orderId: number;
  amount: number;
  paymentMethod: string;
  paymentDate: string;
  status: string;
  transactionId: string;
}
