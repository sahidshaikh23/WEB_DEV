let password = document.querySelector("#pass");
let confirmPassword = document.querySelector("#confirmpass");
let validator = document.querySelector("#submit-btn");

validator.addEventListener("click", checkPass);

function checkPass() {
  if (password.value === "" || confirmPassword.value === "") {
    alert("Enter Password");
  } else if (password.value === confirmPassword.value) {
    alert("Password Matched");
  } else {
    alert("Password didn't Match");
  }
}
