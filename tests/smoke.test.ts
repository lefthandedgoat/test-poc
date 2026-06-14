import { smoke, list } from './helpers/helpers';
import { HttpVerb } from './helpers/types';
import { Category, Customer, Product, Order, OrderItem, Payment, ShippingAddress, ShoppingCart, Review, Supplier } from './models';

// ── Categories ────────────────────────────────────────────
smoke('/api/categories',      list(Category));
smoke('/api/categories/{id}', Category);
smoke('/api/categories',      Category, HttpVerb.POST);
smoke('/api/categories/{id}', Category, HttpVerb.PUT);
smoke('/api/categories/{id}', Category, HttpVerb.DELETE);

// ── Customers ────────────────────────────────────────────
smoke('/api/customers',      list(Customer));
smoke('/api/customers/{id}', Customer);
smoke('/api/customers',      Customer, HttpVerb.POST);
smoke('/api/customers/{id}', Customer, HttpVerb.PUT);
smoke('/api/customers/{id}', Customer, HttpVerb.DELETE);

// ── Products ─────────────────────────────────────────────
smoke('/api/products',      list(Product));
smoke('/api/products/{id}', Product);
smoke('/api/products',      Product, HttpVerb.POST);
smoke('/api/products/{id}', Product, HttpVerb.PUT);
smoke('/api/products/{id}', Product, HttpVerb.DELETE);

// ── Orders ───────────────────────────────────────────────
smoke('/api/orders',      list(Order));
smoke('/api/orders/{id}', Order);
smoke('/api/orders',      Order, HttpVerb.POST);
smoke('/api/orders/{id}', Order, HttpVerb.PUT);
smoke('/api/orders/{id}', Order, HttpVerb.DELETE);

// ── Order Items ──────────────────────────────────────────
smoke('/api/orderitems',      list(OrderItem));
smoke('/api/orderitems/{id}', OrderItem);
smoke('/api/orderitems',      OrderItem, HttpVerb.POST);
smoke('/api/orderitems/{id}', OrderItem, HttpVerb.PUT);
smoke('/api/orderitems/{id}', OrderItem, HttpVerb.DELETE);

// ── Payments ─────────────────────────────────────────────
smoke('/api/payments',      list(Payment));
smoke('/api/payments/{id}', Payment);
smoke('/api/payments',      Payment, HttpVerb.POST);
smoke('/api/payments/{id}', Payment, HttpVerb.PUT);
smoke('/api/payments/{id}', Payment, HttpVerb.DELETE);

// ── Shipping Addresses ───────────────────────────────────
smoke('/api/shippingaddresses',      list(ShippingAddress));
smoke('/api/shippingaddresses/{id}', ShippingAddress);
smoke('/api/shippingaddresses',      ShippingAddress, HttpVerb.POST);
smoke('/api/shippingaddresses/{id}', ShippingAddress, HttpVerb.PUT);
smoke('/api/shippingaddresses/{id}', ShippingAddress, HttpVerb.DELETE);

// ── Shopping Carts ───────────────────────────────────────
smoke('/api/shoppingcarts',      list(ShoppingCart));
smoke('/api/shoppingcarts/{id}', ShoppingCart);
smoke('/api/shoppingcarts',      ShoppingCart, HttpVerb.POST);
smoke('/api/shoppingcarts/{id}', ShoppingCart, HttpVerb.PUT);
smoke('/api/shoppingcarts/{id}', ShoppingCart, HttpVerb.DELETE);

// ── Reviews ──────────────────────────────────────────────
smoke('/api/reviews',      list(Review));
smoke('/api/reviews/{id}', Review);
smoke('/api/reviews',      Review, HttpVerb.POST);
smoke('/api/reviews/{id}', Review, HttpVerb.PUT);
smoke('/api/reviews/{id}', Review, HttpVerb.DELETE);

// ── Suppliers ────────────────────────────────────────────
smoke('/api/suppliers',      list(Supplier));
smoke('/api/suppliers/{id}', Supplier);
smoke('/api/suppliers',      Supplier, HttpVerb.POST);
smoke('/api/suppliers/{id}', Supplier, HttpVerb.PUT);
smoke('/api/suppliers/{id}', Supplier, HttpVerb.DELETE);
