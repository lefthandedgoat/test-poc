import { smoke } from './helpers';
import { HttpVerb } from './types';
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

// Categories
smoke('/api/categories', HttpVerb.GET, CategorySchema);
smoke('/api/categories/{id}', HttpVerb.GET, CategorySchema);
smoke('/api/categories', HttpVerb.POST);
smoke('/api/categories/{id}', HttpVerb.PUT);
smoke('/api/categories/{id}', HttpVerb.DELETE);

// Customers
smoke('/api/customers', HttpVerb.GET, CustomerSchema);
smoke('/api/customers/{id}', HttpVerb.GET, CustomerSchema);
smoke('/api/customers', HttpVerb.POST);
smoke('/api/customers/{id}', HttpVerb.PUT);
smoke('/api/customers/{id}', HttpVerb.DELETE);

// Products
smoke('/api/products', HttpVerb.GET, ProductSchema);
smoke('/api/products/{id}', HttpVerb.GET, ProductSchema);
smoke('/api/products', HttpVerb.POST);
smoke('/api/products/{id}', HttpVerb.PUT);
smoke('/api/products/{id}', HttpVerb.DELETE);

// Orders
smoke('/api/orders', HttpVerb.GET, OrderSchema);
smoke('/api/orders/{id}', HttpVerb.GET, OrderSchema);
smoke('/api/orders', HttpVerb.POST);
smoke('/api/orders/{id}', HttpVerb.PUT);
smoke('/api/orders/{id}', HttpVerb.DELETE);

// Order Items
smoke('/api/orderitems', HttpVerb.GET, OrderItemSchema);
smoke('/api/orderitems/{id}', HttpVerb.GET, OrderItemSchema);
smoke('/api/orderitems', HttpVerb.POST);
smoke('/api/orderitems/{id}', HttpVerb.PUT);
smoke('/api/orderitems/{id}', HttpVerb.DELETE);

// Payments
smoke('/api/payments', HttpVerb.GET, PaymentSchema);
smoke('/api/payments/{id}', HttpVerb.GET, PaymentSchema);
smoke('/api/payments', HttpVerb.POST);
smoke('/api/payments/{id}', HttpVerb.PUT);
smoke('/api/payments/{id}', HttpVerb.DELETE);

// Shipping Addresses
smoke('/api/shippingaddresses', HttpVerb.GET, ShippingAddressSchema);
smoke('/api/shippingaddresses/{id}', HttpVerb.GET, ShippingAddressSchema);
smoke('/api/shippingaddresses', HttpVerb.POST);
smoke('/api/shippingaddresses/{id}', HttpVerb.PUT);
smoke('/api/shippingaddresses/{id}', HttpVerb.DELETE);

// Shopping Carts
smoke('/api/shoppingcarts', HttpVerb.GET, ShoppingCartSchema);
smoke('/api/shoppingcarts/{id}', HttpVerb.GET, ShoppingCartSchema);
smoke('/api/shoppingcarts', HttpVerb.POST);
smoke('/api/shoppingcarts/{id}', HttpVerb.PUT);
smoke('/api/shoppingcarts/{id}', HttpVerb.DELETE);

// Reviews
smoke('/api/reviews', HttpVerb.GET, ReviewSchema);
smoke('/api/reviews/{id}', HttpVerb.GET, ReviewSchema);
smoke('/api/reviews', HttpVerb.POST);
smoke('/api/reviews/{id}', HttpVerb.PUT);
smoke('/api/reviews/{id}', HttpVerb.DELETE);

// Suppliers
smoke('/api/suppliers', HttpVerb.GET, SupplierSchema);
smoke('/api/suppliers/{id}', HttpVerb.GET, SupplierSchema);
smoke('/api/suppliers', HttpVerb.POST);
smoke('/api/suppliers/{id}', HttpVerb.PUT);
smoke('/api/suppliers/{id}', HttpVerb.DELETE);
