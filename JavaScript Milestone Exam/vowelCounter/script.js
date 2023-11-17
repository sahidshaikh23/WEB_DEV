let fullName = document.querySelector(".fullName");
let button = document.querySelector(".checkButton");
let output = document.querySelector(".vowels");
let numVowels = 0;
output.innerText = "";

function check() {
  if (button.value == "check") {
    for (let i = 0; i < fullName.value.length; i++) {
      if (
        fullName.value.charAt(i) == "A" ||
        fullName.value.charAt(i) == "E" ||
        fullName.value.charAt(i) == "I" ||
        fullName.value.charAt(i) == "O" ||
        fullName.value.charAt(i) == "U" ||
        fullName.value.charAt(i) == "a" ||
        fullName.value.charAt(i) == "e" ||
        fullName.value.charAt(i) == "i" ||
        fullName.value.charAt(i) == "o" ||
        fullName.value.charAt(i) == "u"
      ) {
        numVowels++;
      }
    }
    output.innerText = numVowels;
    button.value = "reset";
  } else {
    output.innerText = "";
    fullName.value = " ";
    button.value = "check";
    numVowels = 0;
  }
}

button.addEventListener("click", check);
