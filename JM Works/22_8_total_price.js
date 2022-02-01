// calculate the total price of products

/* const products = [
  {
    name: "laptop",
    price: 1000,
  },
  {
    name: "shirt",
    price: 50,
  },
  {
    name: "shoes",
    price: 150,
  },
  {
    name: "phone",
    price: 500,
  }
];

let totalPrice = 0;
for (const product of products) {
  totalPrice += product.price;
}
console.log(totalPrice);
 */

// total price of multiple quantities of products with different prices from a object array

const cart = [
  {
    name: "laptop",
    price: 1000,
    quantity:1
  },
  {
    name: "shirt",
    price: 50,
    quantity:4
  },
  {
    name: "shoes",
    price: 150,
    quantity:2
  },
  {
    name: "phone",
    price: 500,
    quantity:2
  }
];

let cartTotal = 0;
for (const product of cart) {
  const productTotal = product.price * product.quantity;
  cartTotal += productTotal;
  
}
console.log(cartTotal);