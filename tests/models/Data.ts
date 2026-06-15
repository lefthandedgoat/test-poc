import { Category, Customer, Product, Order, OrderItem, Payment, ShippingAddress, ShoppingCart, Review, Supplier } from './index';

export interface Data {
  category?: Partial<Category>;
  customer?: Partial<Customer>;
  product?: Partial<Product>;
  order?: Partial<Order>;
  orderItem?: Partial<OrderItem>;
  payment?: Partial<Payment>;
  shippingAddress?: Partial<ShippingAddress>;
  shoppingCart?: Partial<ShoppingCart>;
  review?: Partial<Review>;
  supplier?: Partial<Supplier>;
}
