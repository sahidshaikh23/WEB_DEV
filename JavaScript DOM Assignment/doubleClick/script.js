let box = document.querySelector("div");
let action = document.querySelector("button");
action.addEventListener("dblclick", magic);
box.addEventListener("dblclick", normal);

function magic() {
  box.style.backgroundColor = "#000000";
  box.innerText = "You just double clicked me !";
  box.style.border = "2px solid #2f49bf";
  box.style.color = "#ffffff";
  box.style.fontWeight = "800";
  box.style.display = "flex";
  box.style.alignItems = "center";
  box.style.justifyContent = "center";
  box.style.textAlign = "center";
}
function normal() {
  box.style.backgroundColor = "#2f49bf";
  box.innerText = "";
  box.style.border = "2px solid black";
}
