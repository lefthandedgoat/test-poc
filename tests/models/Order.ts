import type { OrderItem } from './OrderItem';

export interface Order {
  id: number;
  customerId: number;
  orderDate: string;
  totalAmount: number;
  status: string;
  shippingAddressId: number;
  items: OrderItem[];
}
