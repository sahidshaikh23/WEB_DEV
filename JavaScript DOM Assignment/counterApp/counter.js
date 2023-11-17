const add = document.querySelector(".add");
const sub = document.querySelector(".minus");
const restart = document.querySelector(".reset");
const display = document.querySelector(".screen");

add.addEventListener("click", addition);
sub.addEventListener("click", subtraction);
restart.addEventListener("click", resetit);

display.innerText = 0;
function addition() {
  display.innerText++;
}

function subtraction() {
  display.innerText--;
}

function resetit() {
  display.innerText = 0;
}
