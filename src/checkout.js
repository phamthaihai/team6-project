function checkout(cart, prices) {
  let total = 0;
  for (const pid in cart) {
    total += prices[pid] * cart[pid];
  }
  return total;
}

module.exports = { checkout };