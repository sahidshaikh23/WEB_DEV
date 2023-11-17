var products = [
  { name: "Shirt", category: "Clothing" },
  { name: "Pants", category: "Clothing" },
  { name: "Hat", category: "Accessories" },
  { name: "Sunglasses", category: "Accessories" },
];

function filterByCategory(arr) {
  let Output = [];
  return function filtered(categ) {
    arr.forEach((el) => {
      if (el.category == categ) {
        Output.push(el);
      }
    });
    return Output;
  };
}

var clothingProducts = filterByCategory(products)("Clothing");
console.log(clothingProducts);
