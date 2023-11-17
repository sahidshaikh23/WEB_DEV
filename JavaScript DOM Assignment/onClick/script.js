let crazy = document.querySelector("div");
crazy.style.backgroundColor = "#818181";
crazy.addEventListener("click", normalAgain);

let clickMe = document.querySelector("h1");
clickMe.addEventListener("click", goCrazy);

function normalAgain() {
  crazy.innerText = "";
  crazy.style.height = "150px";
  crazy.style.width = "150px";
}

function goCrazy() {
  crazy.innerText = "You clicked me and now I am Big";
  crazy.style.height = "250px";
  crazy.style.width = "250px";
}
