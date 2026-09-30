function addToCart(cart, productId, qty = 1) {
    if (qty <= 0) {
    throw new Error("qty must be positive");
    }
    cart[productId] = (cart[productId] || 0) + qty;
    return cart;
}

module.exports = { addToCart };