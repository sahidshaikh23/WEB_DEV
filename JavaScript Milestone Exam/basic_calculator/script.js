let num1 = document.querySelector(".num1");
let operator = document.querySelector(".oprtr");
let num2 = document.querySelector(".num2");
let result = document.querySelector(".answer");

let button = document.querySelector("button");

button.addEventListener("click", answer);
// function myFunction() {
//   result.value = num1.value;
// }
function answer() {
  switch (operator.value) {
    case "+":
      result.value = Number(num1.value) + Number(num2.value);
      break;
    case "-":
      result.value = Number(num1.value) - Number(num2.value);
      break;
    case "*":
      result.value = Number(num1.value) * Number(num2.value);
      break;
    case "/":
      result.value = Number(num1.value) / Number(num2.value);
      break;
    default:
      alert("Invalid Operator");
      break;
  }
}
