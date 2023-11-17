let originalPrice = 1000;
let discountedPrice = 100;

let discountPercent = (price, discounted) => {
  let percentage = 100 - (discounted / price) * 100;
  console.log(`You will save :${percentage.toPrecision(2)}%`);
};

discountPercent(originalPrice, discountedPrice);
