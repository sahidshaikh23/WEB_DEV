let email = document.querySelector("#email");
let password = document.querySelector("#pass");
let output = document.querySelector("p");
let button = document.querySelector("#button");

button.addEventListener("click", () => {
  if (email.value.includes("@") && password.value.length >= 8) {
    output.style.color = "#00ff00";
    output.innerText = "Valid email and Password!";
    output.style.fontSize = "30px";
    output.style.fontWeight = "800";
  } else {
    output.style.color = "#ff0000";
    output.innerText = "Invalid email or Password!";
    output.style.fontSize = "30px";
    output.style.fontWeight = "800";
  }
});
