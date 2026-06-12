using OnlineStore.Api.Models;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Online Store API");

// ─── Customer endpoints ───────────────────────────────────────────
app.MapGet("/api/customers", () =>
{
    var customers = new List<Customer>
    {
        new() { Id = 1, FirstName = "Alice", LastName = "Johnson", Email = "alice@example.com", Phone = "555-0101", CreatedAt = DateTime.UtcNow.AddDays(-30) },
        new() { Id = 2, FirstName = "Bob",   LastName = "Smith",   Email = "bob@example.com",   Phone = "555-0102", CreatedAt = DateTime.UtcNow.AddDays(-20) },
        new() { Id = 3, FirstName = "Carol", LastName = "Williams",Email = "carol@example.com", Phone = "555-0103", CreatedAt = DateTime.UtcNow.AddDays(-10) },
    };
    return Results.Ok(customers);
});

app.MapGet("/api/customers/{id}", (int id) =>
{
    var customer = new Customer
    {
        Id = id,
        FirstName = "Alice",
        LastName = "Johnson",
        Email = "alice@example.com",
        Phone = "555-0101",
        CreatedAt = DateTime.UtcNow.AddDays(-30),
    };
    return Results.Ok(customer);
});

app.MapPost("/api/customers", () => Results.StatusCode(501));
app.MapPut("/api/customers/{id}", () => Results.StatusCode(501));
app.MapDelete("/api/customers/{id}", () => Results.StatusCode(501));

// ─── Product endpoints ────────────────────────────────────────────
app.MapGet("/api/products", () =>
{
    var products = new List<Product>
    {
        new() { Id = 1, Name = "Laptop",       Description = "High-performance laptop",       Price = 1299.99m,  CategoryId = 1, StockQuantity = 50,  ImageUrl = "/images/laptop.jpg",  CreatedAt = DateTime.UtcNow.AddDays(-60) },
        new() { Id = 2, Name = "Mouse",        Description = "Wireless ergonomic mouse",      Price = 49.99m,    CategoryId = 2, StockQuantity = 200, ImageUrl = "/images/mouse.jpg",   CreatedAt = DateTime.UtcNow.AddDays(-55) },
        new() { Id = 3, Name = "Keyboard",     Description = "Mechanical keyboard",           Price = 89.99m,    CategoryId = 2, StockQuantity = 150, ImageUrl = "/images/keyboard.jpg",CreatedAt = DateTime.UtcNow.AddDays(-50) },
        new() { Id = 4, Name = "Monitor",      Description = "4K IPS monitor",                Price = 399.99m,   CategoryId = 3, StockQuantity = 75,  ImageUrl = "/images/monitor.jpg", CreatedAt = DateTime.UtcNow.AddDays(-45) },
    };
    return Results.Ok(products);
});

app.MapGet("/api/products/{id}", (int id) =>
{
    var product = new Product
    {
        Id = id,
        Name = "Laptop",
        Description = "High-performance laptop",
        Price = 1299.99m,
        CategoryId = 1,
        StockQuantity = 50,
        ImageUrl = "/images/laptop.jpg",
        CreatedAt = DateTime.UtcNow.AddDays(-60),
    };
    return Results.Ok(product);
});

app.MapPost("/api/products", () => Results.StatusCode(501));
app.MapPut("/api/products/{id}", () => Results.StatusCode(501));
app.MapDelete("/api/products/{id}", () => Results.StatusCode(501));

// ─── Order endpoints ──────────────────────────────────────────────
app.MapGet("/api/orders", () =>
{
    var orders = new List<Order>
    {
        new()
        {
            Id = 1, CustomerId = 1, OrderDate = DateTime.UtcNow.AddDays(-5), TotalAmount = 1399.97m, Status = "Shipped", ShippingAddressId = 1,
            Items = new List<OrderItem>
            {
                new() { Id = 1, OrderId = 1, ProductId = 1, ProductName = "Laptop",   Quantity = 1, UnitPrice = 1299.99m, SubTotal = 1299.99m },
                new() { Id = 2, OrderId = 1, ProductId = 2, ProductName = "Mouse",    Quantity = 2, UnitPrice = 49.99m,   SubTotal = 99.98m   },
            },
        },
        new()
        {
            Id = 2, CustomerId = 2, OrderDate = DateTime.UtcNow.AddDays(-3), TotalAmount = 89.99m, Status = "Processing", ShippingAddressId = 2,
            Items = new List<OrderItem>
            {
                new() { Id = 3, OrderId = 2, ProductId = 3, ProductName = "Keyboard", Quantity = 1, UnitPrice = 89.99m, SubTotal = 89.99m },
            },
        },
    };
    return Results.Ok(orders);
});

app.MapGet("/api/orders/{id}", (int id) =>
{
    var order = new Order
    {
        Id = id, CustomerId = 1, OrderDate = DateTime.UtcNow.AddDays(-5), TotalAmount = 1399.97m, Status = "Shipped", ShippingAddressId = 1,
        Items = new List<OrderItem>
        {
            new() { Id = 1, OrderId = id, ProductId = 1, ProductName = "Laptop",  Quantity = 1, UnitPrice = 1299.99m, SubTotal = 1299.99m },
            new() { Id = 2, OrderId = id, ProductId = 2, ProductName = "Mouse",   Quantity = 2, UnitPrice = 49.99m,   SubTotal = 99.98m   },
        },
    };
    return Results.Ok(order);
});

app.MapPost("/api/orders", () => Results.StatusCode(501));
app.MapPut("/api/orders/{id}", () => Results.StatusCode(501));
app.MapDelete("/api/orders/{id}", () => Results.StatusCode(501));

// ─── OrderItem endpoints ──────────────────────────────────────────
app.MapGet("/api/orderitems", () =>
{
    var items = new List<OrderItem>
    {
        new() { Id = 1, OrderId = 1, ProductId = 1, ProductName = "Laptop",   Quantity = 1, UnitPrice = 1299.99m, SubTotal = 1299.99m },
        new() { Id = 2, OrderId = 1, ProductId = 2, ProductName = "Mouse",    Quantity = 2, UnitPrice = 49.99m,   SubTotal = 99.98m   },
        new() { Id = 3, OrderId = 2, ProductId = 3, ProductName = "Keyboard", Quantity = 1, UnitPrice = 89.99m,   SubTotal = 89.99m   },
        new() { Id = 4, OrderId = 2, ProductId = 4, ProductName = "Monitor",  Quantity = 1, UnitPrice = 399.99m,  SubTotal = 399.99m  },
    };
    return Results.Ok(items);
});

app.MapGet("/api/orderitems/{id}", (int id) =>
{
    var item = new OrderItem
    {
        Id = id, OrderId = 1, ProductId = 1, ProductName = "Laptop", Quantity = 1, UnitPrice = 1299.99m, SubTotal = 1299.99m,
    };
    return Results.Ok(item);
});

app.MapPost("/api/orderitems", () => Results.StatusCode(501));
app.MapPut("/api/orderitems/{id}", () => Results.StatusCode(501));
app.MapDelete("/api/orderitems/{id}", () => Results.StatusCode(501));

// ─── Payment endpoints ────────────────────────────────────────────
app.MapGet("/api/payments", () =>
{
    var payments = new List<Payment>
    {
        new() { Id = 1, OrderId = 1, Amount = 1399.97m, PaymentMethod = "CreditCard", PaymentDate = DateTime.UtcNow.AddDays(-5), Status = "Completed", TransactionId = "txn_001" },
        new() { Id = 2, OrderId = 2, Amount = 89.99m,   PaymentMethod = "PayPal",     PaymentDate = DateTime.UtcNow.AddDays(-3), Status = "Pending",   TransactionId = "txn_002" },
    };
    return Results.Ok(payments);
});

app.MapGet("/api/payments/{id}", (int id) =>
{
    var payment = new Payment
    {
        Id = id, OrderId = 1, Amount = 1399.97m, PaymentMethod = "CreditCard", PaymentDate = DateTime.UtcNow.AddDays(-5), Status = "Completed", TransactionId = "txn_001",
    };
    return Results.Ok(payment);
});

app.MapPost("/api/payments", () => Results.StatusCode(501));
app.MapPut("/api/payments/{id}", () => Results.StatusCode(501));
app.MapDelete("/api/payments/{id}", () => Results.StatusCode(501));

// ─── ShippingAddress endpoints ────────────────────────────────────
app.MapGet("/api/shippingaddresses", () =>
{
    var addresses = new List<ShippingAddress>
    {
        new() { Id = 1, CustomerId = 1, Street = "123 Main St",    City = "Springfield", State = "IL", ZipCode = "62701", Country = "US", IsDefault = true  },
        new() { Id = 2, CustomerId = 1, Street = "456 Oak Ave",    City = "Chicago",     State = "IL", ZipCode = "60601", Country = "US", IsDefault = false },
        new() { Id = 3, CustomerId = 2, Street = "789 Pine Rd",    City = "Portland",    State = "OR", ZipCode = "97201", Country = "US", IsDefault = true  },
    };
    return Results.Ok(addresses);
});

app.MapGet("/api/shippingaddresses/{id}", (int id) =>
{
    var address = new ShippingAddress
    {
        Id = id, CustomerId = 1, Street = "123 Main St", City = "Springfield", State = "IL", ZipCode = "62701", Country = "US", IsDefault = true,
    };
    return Results.Ok(address);
});

app.MapPost("/api/shippingaddresses", () => Results.StatusCode(501));
app.MapPut("/api/shippingaddresses/{id}", () => Results.StatusCode(501));
app.MapDelete("/api/shippingaddresses/{id}", () => Results.StatusCode(501));

// ─── ShoppingCart endpoints ───────────────────────────────────────
app.MapGet("/api/shoppingcarts", () =>
{
    var carts = new List<ShoppingCart>
    {
        new()
        {
            Id = 1, CustomerId = 1, CreatedAt = DateTime.UtcNow.AddDays(-1), ExpiresAt = DateTime.UtcNow.AddDays(6),
            Items = new List<CartItem>
            {
                new() { ProductId = 2, ProductName = "Mouse",    UnitPrice = 49.99m,  Quantity = 1 },
                new() { ProductId = 3, ProductName = "Keyboard", UnitPrice = 89.99m,  Quantity = 1 },
            },
        },
        new()
        {
            Id = 2, CustomerId = 2, CreatedAt = DateTime.UtcNow.AddHours(-2), ExpiresAt = DateTime.UtcNow.AddDays(6),
            Items = new List<CartItem>
            {
                new() { ProductId = 1, ProductName = "Laptop", UnitPrice = 1299.99m, Quantity = 1 },
            },
        },
    };
    return Results.Ok(carts);
});

app.MapGet("/api/shoppingcarts/{id}", (int id) =>
{
    var cart = new ShoppingCart
    {
        Id = id, CustomerId = 1, CreatedAt = DateTime.UtcNow.AddDays(-1), ExpiresAt = DateTime.UtcNow.AddDays(6),
        Items = new List<CartItem>
        {
            new() { ProductId = 2, ProductName = "Mouse",    UnitPrice = 49.99m,  Quantity = 1 },
            new() { ProductId = 3, ProductName = "Keyboard", UnitPrice = 89.99m,  Quantity = 1 },
        },
    };
    return Results.Ok(cart);
});

app.MapPost("/api/shoppingcarts", () => Results.StatusCode(501));
app.MapPut("/api/shoppingcarts/{id}", () => Results.StatusCode(501));
app.MapDelete("/api/shoppingcarts/{id}", () => Results.StatusCode(501));

// ─── Category endpoints ───────────────────────────────────────────
app.MapGet("/api/categories", () =>
{
    var categories = new List<Category>
    {
        new() { Id = 1, Name = "Computers",      Description = "Computers and accessories", ParentCategoryId = null },
        new() { Id = 2, Name = "Peripherals",    Description = "Input and output devices",  ParentCategoryId = 1    },
        new() { Id = 3, Name = "Displays",       Description = "Monitors and screens",      ParentCategoryId = 1    },
        new() { Id = 4, Name = "Networking",     Description = "Network equipment",         ParentCategoryId = null },
    };
    return Results.Ok(categories);
});

app.MapGet("/api/categories/{id}", (int id) =>
{
    var category = new Category
    {
        Id = id, Name = "Computers", Description = "Computers and accessories", ParentCategoryId = null,
    };
    return Results.Ok(category);
});

app.MapPost("/api/categories", () => Results.StatusCode(501));
app.MapPut("/api/categories/{id}", () => Results.StatusCode(501));
app.MapDelete("/api/categories/{id}", () => Results.StatusCode(501));

// ─── Review endpoints ─────────────────────────────────────────────
app.MapGet("/api/reviews", () =>
{
    var reviews = new List<Review>
    {
        new() { Id = 1, ProductId = 1, CustomerId = 1, Rating = 5, Title = "Great laptop!",   Comment = "Fast and reliable.",          CreatedAt = DateTime.UtcNow.AddDays(-4) },
        new() { Id = 2, ProductId = 2, CustomerId = 2, Rating = 4, Title = "Good mouse",      Comment = "Comfortable to use.",          CreatedAt = DateTime.UtcNow.AddDays(-3) },
        new() { Id = 3, ProductId = 3, CustomerId = 1, Rating = 3, Title = "Decent keyboard", Comment = "Keys are a bit stiff.",         CreatedAt = DateTime.UtcNow.AddDays(-2) },
        new() { Id = 4, ProductId = 4, CustomerId = 3, Rating = 5, Title = "Excellent monitor",Comment = "Crisp 4K display, highly recommended.", CreatedAt = DateTime.UtcNow.AddDays(-1) },
    };
    return Results.Ok(reviews);
});

app.MapGet("/api/reviews/{id}", (int id) =>
{
    var review = new Review
    {
        Id = id, ProductId = 1, CustomerId = 1, Rating = 5, Title = "Great laptop!", Comment = "Fast and reliable.", CreatedAt = DateTime.UtcNow.AddDays(-4),
    };
    return Results.Ok(review);
});

app.MapPost("/api/reviews", () => Results.StatusCode(501));
app.MapPut("/api/reviews/{id}", () => Results.StatusCode(501));
app.MapDelete("/api/reviews/{id}", () => Results.StatusCode(501));

// ─── Supplier endpoints ───────────────────────────────────────────
app.MapGet("/api/suppliers", () =>
{
    var suppliers = new List<Supplier>
    {
        new() { Id = 1, Name = "TechSupply Co.",   ContactName = "David Green",  ContactEmail = "david@techsupply.com",  ContactPhone = "555-0201", Address = "100 Industrial Blvd, Austin, TX", CreatedAt = DateTime.UtcNow.AddDays(-100) },
        new() { Id = 2, Name = "GlobalParts Ltd.", ContactName = "Emma White",   ContactEmail = "emma@globalparts.com",  ContactPhone = "555-0202", Address = "200 Commerce Dr, Boston, MA",    CreatedAt = DateTime.UtcNow.AddDays(-90)  },
        new() { Id = 3, Name = "ElectroDistrib",   ContactName = "Frank Black",  ContactEmail = "frank@electrodistrib.com",ContactPhone = "555-0203", Address = "300 Logistics Way, Seattle, WA", CreatedAt = DateTime.UtcNow.AddDays(-80)  },
    };
    return Results.Ok(suppliers);
});

app.MapGet("/api/suppliers/{id}", (int id) =>
{
    var supplier = new Supplier
    {
        Id = id, Name = "TechSupply Co.", ContactName = "David Green", ContactEmail = "david@techsupply.com", ContactPhone = "555-0201", Address = "100 Industrial Blvd, Austin, TX", CreatedAt = DateTime.UtcNow.AddDays(-100),
    };
    return Results.Ok(supplier);
});

app.MapPost("/api/suppliers", () => Results.StatusCode(501));
app.MapPut("/api/suppliers/{id}", () => Results.StatusCode(501));
app.MapDelete("/api/suppliers/{id}", () => Results.StatusCode(501));

app.Run();
