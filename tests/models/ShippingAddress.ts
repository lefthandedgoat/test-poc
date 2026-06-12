export interface ShippingAddress {
  id: number;
  customerId: number;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isDefault: boolean;
}
