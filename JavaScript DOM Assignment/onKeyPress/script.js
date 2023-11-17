let fullpage = document.querySelector("body");
fullpage.addEventListener("keypress", rotate);

function rotate() {
  let box = document.querySelector("div");
  box.style.transform = "rotate(1440deg)";
  box.style.transition = "3s";
}
