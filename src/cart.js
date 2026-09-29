function addToCart(cart, productId, qty = 1) {
    cart[productId] = (cart[productId] || 0) + qty;
    return cart;
}

module.exports = { addToCart };