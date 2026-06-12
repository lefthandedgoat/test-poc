import { smoke, list } from './helpers/helpers';
import { HttpVerb } from './helpers/types';
import { CustomerSchema } from './models/Customer';
import { ProductSchema } from './models/Product';
import { OrderSchema } from './models/Order';
import { OrderItemSchema } from './models/OrderItem';
import { CategorySchema } from './models/Category';
import { PaymentSchema } from './models/Payment';
import { ShippingAddressSchema } from './models/ShippingAddress';
import { ShoppingCartSchema } from './models/ShoppingCart';
import { ReviewSchema } from './models/Review';
import { SupplierSchema } from './models/Supplier';

// ── Categories ────────────────────────────────────────────
smoke('/api/categories',      HttpVerb.GET, list(CategorySchema));
smoke('/api/categories/{id}', HttpVerb.GET, CategorySchema);
smoke('/api/categories',      HttpVerb.POST, CategorySchema);
smoke('/api/categories/{id}', HttpVerb.PUT,  CategorySchema);
smoke('/api/categories/{id}', HttpVerb.DELETE, CategorySchema);

// ── Customers ────────────────────────────────────────────
smoke('/api/customers',      HttpVerb.GET, list(CustomerSchema));
smoke('/api/customers/{id}', HttpVerb.GET, CustomerSchema);
smoke('/api/customers',      HttpVerb.POST, CustomerSchema);
smoke('/api/customers/{id}', HttpVerb.PUT,  CustomerSchema);
smoke('/api/customers/{id}', HttpVerb.DELETE, CustomerSchema);

// ── Products ─────────────────────────────────────────────
smoke('/api/products',      HttpVerb.GET, list(ProductSchema));
smoke('/api/products/{id}', HttpVerb.GET, ProductSchema);
smoke('/api/products',      HttpVerb.POST, ProductSchema);
smoke('/api/products/{id}', HttpVerb.PUT,  ProductSchema);
smoke('/api/products/{id}', HttpVerb.DELETE, ProductSchema);

// ── Orders ───────────────────────────────────────────────
smoke('/api/orders',      HttpVerb.GET, list(OrderSchema));
smoke('/api/orders/{id}', HttpVerb.GET, OrderSchema);
smoke('/api/orders',      HttpVerb.POST, OrderSchema);
smoke('/api/orders/{id}', HttpVerb.PUT,  OrderSchema);
smoke('/api/orders/{id}', HttpVerb.DELETE, OrderSchema);

// ── Order Items ──────────────────────────────────────────
smoke('/api/orderitems',      HttpVerb.GET, list(OrderItemSchema));
smoke('/api/orderitems/{id}', HttpVerb.GET, OrderItemSchema);
smoke('/api/orderitems',      HttpVerb.POST, OrderItemSchema);
smoke('/api/orderitems/{id}', HttpVerb.PUT,  OrderItemSchema);
smoke('/api/orderitems/{id}', HttpVerb.DELETE, OrderItemSchema);

// ── Payments ─────────────────────────────────────────────
smoke('/api/payments',      HttpVerb.GET, list(PaymentSchema));
smoke('/api/payments/{id}', HttpVerb.GET, PaymentSchema);
smoke('/api/payments',      HttpVerb.POST, PaymentSchema);
smoke('/api/payments/{id}', HttpVerb.PUT,  PaymentSchema);
smoke('/api/payments/{id}', HttpVerb.DELETE, PaymentSchema);

// ── Shipping Addresses ───────────────────────────────────
smoke('/api/shippingaddresses',      HttpVerb.GET, list(ShippingAddressSchema));
smoke('/api/shippingaddresses/{id}', HttpVerb.GET, ShippingAddressSchema);
smoke('/api/shippingaddresses',      HttpVerb.POST, ShippingAddressSchema);
smoke('/api/shippingaddresses/{id}', HttpVerb.PUT,  ShippingAddressSchema);
smoke('/api/shippingaddresses/{id}', HttpVerb.DELETE, ShippingAddressSchema);

// ── Shopping Carts ───────────────────────────────────────
smoke('/api/shoppingcarts',      HttpVerb.GET, list(ShoppingCartSchema));
smoke('/api/shoppingcarts/{id}', HttpVerb.GET, ShoppingCartSchema);
smoke('/api/shoppingcarts',      HttpVerb.POST, ShoppingCartSchema);
smoke('/api/shoppingcarts/{id}', HttpVerb.PUT,  ShoppingCartSchema);
smoke('/api/shoppingcarts/{id}', HttpVerb.DELETE, ShoppingCartSchema);

// ── Reviews ──────────────────────────────────────────────
smoke('/api/reviews',      HttpVerb.GET, list(ReviewSchema));
smoke('/api/reviews/{id}', HttpVerb.GET, ReviewSchema);
smoke('/api/reviews',      HttpVerb.POST, ReviewSchema);
smoke('/api/reviews/{id}', HttpVerb.PUT,  ReviewSchema);
smoke('/api/reviews/{id}', HttpVerb.DELETE, ReviewSchema);

// ── Suppliers ────────────────────────────────────────────
smoke('/api/suppliers',      HttpVerb.GET, list(SupplierSchema));
smoke('/api/suppliers/{id}', HttpVerb.GET, SupplierSchema);
smoke('/api/suppliers',      HttpVerb.POST, SupplierSchema);
smoke('/api/suppliers/{id}', HttpVerb.PUT,  SupplierSchema);
smoke('/api/suppliers/{id}', HttpVerb.DELETE, SupplierSchema);
