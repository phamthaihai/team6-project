const PRODUCTS = [
  { id: 1, name: "Keyboard", price: 30 },
  { id: 2, name: "Mouse", price: 12 },
];

function listProducts() {
    return PRODUCTS;
}

module.exports = { listProducts };