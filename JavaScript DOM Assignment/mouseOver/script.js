let fix = document.querySelector("#out");
let move = document.querySelector("#in");

move.addEventListener("mouseover", animate);

function animate() {
  move.style.transform = "rotate(1440deg)";
  move.style.transition = "transform 6s";
}
