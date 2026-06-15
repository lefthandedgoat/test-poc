import { Data, Category, Product, Customer, ShippingAddress, Order, OrderItem, Payment, ShoppingCart, Review, Supplier } from "../models";

export function test_Category(data: Data): () => Data {
  const defaults: Category = {
    id: 777,
    name: 'Mock Category',
    description: 'A mock category for testing',
    parentCategoryId: null,
  };
  return () => ({ ...data, category: { ...defaults, ...(data.category ?? {}) } });
}

export function test_Product(data: Data): () => Data {
  const category = data.category ?? test_Category(data)().category!;
  const defaults: Product = {
    id: 1,
    name: 'Mock Product',
    description: 'A mock product for testing',
    price: 19.99,
    categoryId: category.id!,
    stockQuantity: 100,
    imageUrl: 'http://example.com/product.jpg',
    createdAt: '2026-01-01T00:00:00Z',
  };
  return () => ({ ...data, product: { ...defaults, ...(data.product ?? {}) }, category: category });
}

export function test_Customer(data: Data): () => Data {
  const defaults: Customer = {
    id: 1,
    firstName: 'Alice',
    lastName: 'Smith',
    email: 'alice@example.com',
    phone: '555-0000',
    createdAt: '2026-01-01T00:00:00Z',
  };
  return () => ({ ...data, customer: { ...defaults, ...(data.customer ?? {}) } });
}

export function test_ShippingAddress(data: Data): () => Data {
  const customer = data.customer ?? test_Customer(data)().customer!;
  const defaults: ShippingAddress = {
    id: 1,
    customerId: customer.id!,
    street: '123 Main St',
    city: 'Springfield',
    state: 'IL',
    zipCode: '62701',
    country: 'USA',
    isDefault: false,
  };
  return () => ({ ...data, shippingAddress: { ...defaults, ...(data.shippingAddress ?? {}) }, customer: customer });
}

export function test_Order(data: Data): () => Data {
  const customer = data.customer ?? test_Customer(data)().customer!;
  const shippingAddress = data.shippingAddress ?? test_ShippingAddress(data)().shippingAddress!;
  const defaults: Order = {
    id: 1,
    customerId: customer.id!,
    orderDate: '2026-06-14T00:00:00Z',
    totalAmount: 99.99,
    status: 'Pending',
    shippingAddressId: shippingAddress.id!,
    items: [],
  };
  return () => ({ ...data, order: { ...defaults, ...(data.order ?? {}) }, customer: customer, shippingAddress: shippingAddress });
}

export function test_OrderItem(data: Data): () => Data {
  const order = data.order ?? test_Order(data)().order!;
  const product = data.product ?? test_Product(data)().product!;
  const defaults: OrderItem = {
    id: 1,
    orderId: order.id!,
    productId: product.id!,
    productName: product.name,
    quantity: 2,
    unitPrice: product.price!,
    subTotal: 2 * product.price!,
  };
  return () => ({ ...data, orderItem: { ...defaults, ...(data.orderItem ?? {}) }, order: order, product: product });
}

export function test_Payment(data: Data): () => Data {
  const order = data.order ?? test_Order(data)().order!;
  const defaults: Payment = {
    id: 1,
    orderId: order.id!,
    amount: order.totalAmount!,
    paymentMethod: 'Credit Card',
    paymentDate: '2026-06-14T00:00:00Z',
    status: 'Completed',
    transactionId: 'txn_12345',
  };
  return () => ({ ...data, payment: { ...defaults, ...(data.payment ?? {}) }, order: order });
}

export function test_ShoppingCart(data: Data): () => Data {
  const customer = data.customer ?? test_Customer(data)().customer!;
  const defaults: ShoppingCart = {
    id: 1,
    customerId: customer.id!,
    createdAt: '2026-06-14T00:00:00Z',
    expiresAt: null,
    items: [],
  };
  return () => ({ ...data, shoppingCart: { ...defaults, ...(data.shoppingCart ?? {}) }, customer: customer });
}

export function test_Review(data: Data): () => Data {
  const product = data.product ?? test_Product(data)().product!;
  const customer = data.customer ?? test_Customer(data)().customer!;
  const defaults: Review = {
    id: 1,
    productId: product.id!,
    customerId: customer.id!,
    rating: 5,
    title: 'Great product',
    comment: 'Highly recommended!',
    createdAt: '2026-06-14T00:00:00Z',
  };
  return () => ({ ...data, review: { ...defaults, ...(data.review ?? {}) }, product: product, customer: customer });
}

export function test_Supplier(data: Data): () => Data {
  const defaults: Supplier = {
    id: 1,
    name: 'Mock Supplier',
    contactName: 'Bob Jones',
    contactEmail: 'bob@supplier.com',
    contactPhone: '555-1234',
    address: '456 Supply Rd',
    createdAt: '2026-01-01T00:00:00Z',
  };
  return () => ({ ...data, supplier: { ...defaults, ...(data.supplier ?? {}) } });
}
