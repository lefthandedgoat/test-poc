import { smoke, list } from './helpers/helpers';
import { HttpVerb } from './helpers/types';
import { Customer } from './models/Customer';
import { Product } from './models/Product';
import { Order } from './models/Order';
import { OrderItem } from './models/OrderItem';
import { Category } from './models/Category';
import { Payment } from './models/Payment';
import { ShippingAddress } from './models/ShippingAddress';
import { ShoppingCart } from './models/ShoppingCart';
import { Review } from './models/Review';
import { Supplier } from './models/Supplier';

// ── Categories ────────────────────────────────────────────
smoke('/api/categories',      HttpVerb.GET, list(Category));
smoke('/api/categories/{id}', HttpVerb.GET, Category);
smoke('/api/categories',      HttpVerb.POST, Category);
smoke('/api/categories/{id}', HttpVerb.PUT,  Category);
smoke('/api/categories/{id}', HttpVerb.DELETE, Category);

// ── Customers ────────────────────────────────────────────
smoke('/api/customers',      HttpVerb.GET, list(Customer));
smoke('/api/customers/{id}', HttpVerb.GET, Customer);
smoke('/api/customers',      HttpVerb.POST, Customer);
smoke('/api/customers/{id}', HttpVerb.PUT,  Customer);
smoke('/api/customers/{id}', HttpVerb.DELETE, Customer);

// ── Products ─────────────────────────────────────────────
smoke('/api/products',      HttpVerb.GET, list(Product));
smoke('/api/products/{id}', HttpVerb.GET, Product);
smoke('/api/products',      HttpVerb.POST, Product);
smoke('/api/products/{id}', HttpVerb.PUT,  Product);
smoke('/api/products/{id}', HttpVerb.DELETE, Product);

// ── Orders ───────────────────────────────────────────────
smoke('/api/orders',      HttpVerb.GET, list(Order));
smoke('/api/orders/{id}', HttpVerb.GET, Order);
smoke('/api/orders',      HttpVerb.POST, Order);
smoke('/api/orders/{id}', HttpVerb.PUT,  Order);
smoke('/api/orders/{id}', HttpVerb.DELETE, Order);

// ── Order Items ──────────────────────────────────────────
smoke('/api/orderitems',      HttpVerb.GET, list(OrderItem));
smoke('/api/orderitems/{id}', HttpVerb.GET, OrderItem);
smoke('/api/orderitems',      HttpVerb.POST, OrderItem);
smoke('/api/orderitems/{id}', HttpVerb.PUT,  OrderItem);
smoke('/api/orderitems/{id}', HttpVerb.DELETE, OrderItem);

// ── Payments ─────────────────────────────────────────────
smoke('/api/payments',      HttpVerb.GET, list(Payment));
smoke('/api/payments/{id}', HttpVerb.GET, Payment);
smoke('/api/payments',      HttpVerb.POST, Payment);
smoke('/api/payments/{id}', HttpVerb.PUT,  Payment);
smoke('/api/payments/{id}', HttpVerb.DELETE, Payment);

// ── Shipping Addresses ───────────────────────────────────
smoke('/api/shippingaddresses',      HttpVerb.GET, list(ShippingAddress));
smoke('/api/shippingaddresses/{id}', HttpVerb.GET, ShippingAddress);
smoke('/api/shippingaddresses',      HttpVerb.POST, ShippingAddress);
smoke('/api/shippingaddresses/{id}', HttpVerb.PUT,  ShippingAddress);
smoke('/api/shippingaddresses/{id}', HttpVerb.DELETE, ShippingAddress);

// ── Shopping Carts ───────────────────────────────────────
smoke('/api/shoppingcarts',      HttpVerb.GET, list(ShoppingCart));
smoke('/api/shoppingcarts/{id}', HttpVerb.GET, ShoppingCart);
smoke('/api/shoppingcarts',      HttpVerb.POST, ShoppingCart);
smoke('/api/shoppingcarts/{id}', HttpVerb.PUT,  ShoppingCart);
smoke('/api/shoppingcarts/{id}', HttpVerb.DELETE, ShoppingCart);

// ── Reviews ──────────────────────────────────────────────
smoke('/api/reviews',      HttpVerb.GET, list(Review));
smoke('/api/reviews/{id}', HttpVerb.GET, Review);
smoke('/api/reviews',      HttpVerb.POST, Review);
smoke('/api/reviews/{id}', HttpVerb.PUT,  Review);
smoke('/api/reviews/{id}', HttpVerb.DELETE, Review);

// ── Suppliers ────────────────────────────────────────────
smoke('/api/suppliers',      HttpVerb.GET, list(Supplier));
smoke('/api/suppliers/{id}', HttpVerb.GET, Supplier);
smoke('/api/suppliers',      HttpVerb.POST, Supplier);
smoke('/api/suppliers/{id}', HttpVerb.PUT,  Supplier);
smoke('/api/suppliers/{id}', HttpVerb.DELETE, Supplier);
