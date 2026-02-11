/**
 * LAB 04 - Task 2
 * Legacy Code with Anti-Patterns (Annotated)
 * This is original code from Appendix B.
 * I added comments to mark anti-patterns from Chapter 4.
 */

// ANTI-PATTERN 1: Global Namespace Pollution
// Many global variables declared in global scope

var cart = [];              // Global variable
var user = null;            // Global variable
var products = [];          // Global variable
var discount = 0;           // Global variable
var shippingCost = 5;       // Global variable
var taxRate = 0.08;         // Global variable
var currency = "USD";       // Global variable
var language = "en";        // Global variable
var theme = "light";        // Global variable


// ANTI-PATTERN 2: Tight Coupling
// Functions directly use and modify global variables

function addProduct(id, name, price, category) {
    var product = {
        id: id,
        name: name,
        price: price,
        category: category
    };

    products.push(product);   // Direct access to global variable
    updateProductDisplay();   // Direct dependency
    saveProductsToStorage();  // Direct dependency
}

function removeProduct(id) {
    for (var i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            products.splice(i, 1);
            break;
        }
    }

    updateProductDisplay();
    saveProductsToStorage();
}

function updateProductDisplay() {
    console.log("Products updated. Total: " + products.length);
}

function saveProductsToStorage() {
    if (typeof localStorage !== "undefined") {
        localStorage.setItem("products", JSON.stringify(products));
    }
}


// ANTI-PATTERN 3: Tight Coupling + Direct Global Access
// Cart logic depends on global products and cart

function addToCart(productId, quantity) {
    var product = null;

    for (var i = 0; i < products.length; i++) {
        if (products[i].id === productId) {
            product = products[i];
            break;
        }
    }

    if (product) {
        var cartItem = {
            id: productId,
            name: product.name,
            price: product.price,
            quantity: quantity
        };

        cart.push(cartItem);   // Global access
        updateCartDisplay();
        saveCartToStorage();
        updateTotal();
    }
}

function removeFromCart(productId) {
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].id === productId) {
            cart.splice(i, 1);
            break;
        }
    }

    updateCartDisplay();
    saveCartToStorage();
    updateTotal();
}

function updateCartDisplay() {
    console.log("Cart updated. Items: " + cart.length);
}

function saveCartToStorage() {
    if (typeof localStorage !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(cart));
    }
}


// ANTI-PATTERN 4: Code Duplication
// Same calculation logic repeated multiple times (DRY violation)

function calculateSubtotal() {
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
    }
    return total;
}

// DUPLICATE FUNCTION
function calculateCartTotal() {
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
    }
    return total;
}

// DUPLICATE FUNCTION
function getCartSubtotal() {
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
    }
    return total;
}


// ANTI-PATTERN 5: Code Duplication (Tax + Shipping)

function calculateTax(amount) {
    return amount * taxRate;   // Uses global taxRate
}

function computeTax(amount) {
    return amount * taxRate;   // Same logic duplicated
}

function calculateShipping(amount) {
    if (amount > 50) {
        return 0;
    } else {
        return shippingCost;
    }
}

function getShippingCost(amount) {
    if (amount > 50) {
        return 0;
    } else {
        return shippingCost;
    }
}


// ANTI-PATTERN 6: No Encapsulation + Global State Modification

function setUser(name, email, address) {
    user = {   // Modifying global user
        name: name,
        email: email,
        address: address
    };

    updateUserDisplay();
    saveUserToStorage();
}

function updateUserDisplay() {
    if (user) {
        console.log("User: " + user.name + " (" + user.email + ")");
    }
}

function saveUserToStorage() {
    if (typeof localStorage !== "undefined" && user) {
        localStorage.setItem("user", JSON.stringify(user));
    }
}


// ANTI-PATTERN 7: Configuration Scattered (No Structure)

function setDiscount(value) {
    discount = value;   // Global modification
    updateTotal();
}

function setTaxRate(rate) {
    taxRate = rate;     // Global modification
    updateTotal();
}

function setCurrency(newCurrency) {
    currency = newCurrency;  // Global modification
    updateCartDisplay();
}


// ANTI-PATTERN 8: Tight Coupling in Order Processing

function processOrder() {

    if (!user) {
        console.log("User not set");
        return false;
    }

    if (cart.length === 0) {
        console.log("Cart is empty");
        return false;
    }

    var subtotal = calculateSubtotal();
    var tax = calculateTax(subtotal);
    var shipping = calculateShipping(subtotal);

    var total = subtotal + tax + shipping - discount;

    var order = {
        id: "ORD-" + Date.now(),
        user: user,
        items: cart,
        subtotal: subtotal,
        tax: tax,
        shipping: shipping,
        discount: discount,
        total: total
    };

    clearCart();   // Dependency

    return order;
}

function clearCart() {
    cart = [];    // Global reset
    updateCartDisplay();
    saveCartToStorage();
    updateTotal();
}


// ANTI-PATTERN 9: Lack of Structure (Spaghetti Code)
// Everything mixed in one file, no modules, no namespaces

function updateTotal() {
    var subtotal = calculateSubtotal();
    var tax = calculateTax(subtotal);
    var shipping = calculateShipping(subtotal);
    var total = subtotal + tax + shipping - discount;

    console.log("Total: " + currency + " " + total.toFixed(2));
}