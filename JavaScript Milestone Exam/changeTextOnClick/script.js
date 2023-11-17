let heading = document.querySelector("h1");
let button = document.querySelector("button");

button.addEventListener("click", () => {
  if (heading.innerText == "PW Skills") {
    heading.innerText = "The most affordable learning platform";
  } else {
    heading.innerText = "PW Skills";
  }
});
