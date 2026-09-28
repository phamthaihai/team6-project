function checkout(cart, prices) {
  let total = 0;
  for (const pid in cart) {
total += (prices[pid] || 0) * cart[pid];  }
  return total;
}

module.exports = { checkout };