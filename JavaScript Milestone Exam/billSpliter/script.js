let magie = document.querySelector("#magie");
let pizza = document.querySelector("#piza");
let momos = document.querySelector("#momo");
let burger = document.querySelector("#brgr");
let person = document.querySelector("#prsn");
let billTotal = document.querySelector(".total");
let perHead = document.querySelector(".perHead");
let button = document.querySelector("button");
let total = 0,
  perHeadBill = 0;

button.addEventListener("click", () => {
  total =
    Number(magie.value) +
    Number(pizza.value) +
    Number(momos.value) +
    Number(burger.value);
  perHeadBill = total / person.value;
  billTotal.innerText = total;
  perHead.innerText = perHeadBill;
});
