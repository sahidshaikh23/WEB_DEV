let page = document.querySelector("html");
let button = document.querySelector("button");

let array = [
  "#000000",
  "00ff00",
  "#ee5e04",
  "0000ff",
  "#ea12dc",
  "#00f8d7",
  "#5c5700",
];
function changeColor() {
  let colorNumber = Math.floor(Math.random() * array.length);
  page.style.backgroundColor = array[colorNumber];
}

button.addEventListener("click", changeColor);
