let box = document.querySelector("div");
box.addEventListener("mouseover", changeColor);
box.addEventListener("mouseout", changeBack);

function changeColor() {
  box.innerText = "Mouse Out Will Make it Default";
  box.style.color = "#ffffff";
  box.style.fontWeight = "800";
  box.style.display = "flex";
  box.style.alignItems = "center";
  box.style.justifyContent = "center";
  box.style.backgroundColor = "#000000";
  box.style.border = "4px solid #ffffff";
}
function changeBack() {
  box.innerText = "Mouse Over Will Make a Change";
  box.style.color = "#000000";
  box.style.fontWeight = "800";
  box.style.display = "flex";
  box.style.alignItems = "center";
  box.style.justifyContent = "center";
  box.style.backgroundColor = "#ffffff";
  box.style.border = "4px solid #000000";
}
