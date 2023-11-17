let typeOfCar = document.querySelector("select");
let noOfDays = document.querySelector("input");
let output = document.querySelector("p");
let button = document.querySelector("button");
const calculatedRent = button.addEventListener("click", () => {
  let rent;
  if (typeOfCar.value == "Economy") {
    rent = 4000 * noOfDays.value;
  } else if (typeOfCar.value == "Midsize") {
    rent = 10000 * noOfDays.value;
  } else if (typeOfCar.value == "Luxury") {
    rent = 20000 * noOfDays.value;
  }
  output.innerText = rent;
});
