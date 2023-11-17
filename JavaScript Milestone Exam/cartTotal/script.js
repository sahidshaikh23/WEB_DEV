let cart = [{ 10000: 1 }, { 30000: 3 }, { 35000: 2 }, { 80000: 1 }];

let cartQuantity = []; //Array of Quantity
let unitPrice = []; //Array of Unit Price

let quantity = []; //Array of quantity only
let price = []; //Array of price only

let finalPrice = []; //Array of final prices of each item

let cartSum = () => {
  for (let i = 0; i < cart.length; i++) {
    cartQuantity.push(Object.values(cart[i]));
    unitPrice.push(Object.keys(cart[i]));
  }
  for (let i = 0; i < cart.length; i++) {
    quantity.push(cartQuantity[i][0]);
    price.push(unitPrice[i][0]);
  }
  for (let i = 0; i < cart.length; i++) {
    finalPrice.push(price[i] * quantity[i]);
  }
  let cartTotal = 0;
  for (let i = 0; i < cart.length; i++) {
    cartTotal += finalPrice[i];
  }
  console.log(`Final Price is: ${cartTotal}`);
};
cartSum();
