const PRODUCTS = [
  { id: 1, name: "Keyboard", price: 30 },
  { id: 2, name: "Mouse", price: 15 },
];

function listProducts() {
    return PRODUCTS;
}

module.exports = { listProducts };