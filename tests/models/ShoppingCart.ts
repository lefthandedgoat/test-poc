export interface CartItem {
  productId: number;
  productName: string;
  unitPrice: number;
  quantity: number;
}

export interface ShoppingCart {
  id: number;
  customerId: number;
  createdAt: string;
  expiresAt: string | null;
  items: CartItem[];
}
