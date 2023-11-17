let firstName = document.querySelector(".inputName");
let clickButton = document.querySelector("button");

const capitalize = () => {
  if (clickButton.innerText == "Capitalize") {
    let newString =
      firstName.value.charAt(0).toUpperCase() +
      firstName.value.substr(1, firstName.value.length - 1);
    firstName.value = newString;
    clickButton.innerText = "Reset";
  } else if (clickButton.innerText == "Reset" && firstName.value == "") {
    clickButton.innerText = "Capitalize";
  }
};
const reset = () => {
  if (clickButton.innerText == "Reset" || firstName.value == "") {
    clickButton.innerText = "Capitalize";
    firstName.value = "";
  } else {
    alert("Already Capitalized");
    clickButton.innerText = "Reset";
  }
};
const check = () => {
  firstName.value.charAt(0) == firstName.value.charAt(0).toLowerCase()
    ? capitalize()
    : reset();
};
clickButton.addEventListener("click", check);
