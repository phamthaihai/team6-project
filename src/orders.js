const ORDERS = [];

function addOrder(order) {
  ORDERS.push(order);
}

function listOrders() {
  return ORDERS;
}

module.exports = { addOrder, listOrders };
