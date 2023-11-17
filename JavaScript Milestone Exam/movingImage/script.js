let box = document.querySelector("div");
let button = document.querySelector("button");

box.style.width = "100px";
box.style.height = "100px";
box.style.backgroundColor = "#a52a2a";
box.style.position = "relative";
box.style.borderRadius = "5px";
box.style.border = "2px solid #000000";
box.style.left = "0px";
box.style.top = "0px";

function moveImg(ev) {
  let key_value = ev.keyCode;
  switch (key_value) {
    case 37:
      moveleft();
      break;
    case 38:
      moveup();
      break;
    case 39:
      moveright();
      break;
    case 40:
      movedown();
      break;
  }
}
function moveleft() {
  box.style.left = parseInt(box.style.left) - 5 + "px";
}
function moveup() {
  box.style.top = parseInt(box.style.top) - 5 + "px";
}
function moveright() {
  box.style.left = parseInt(box.style.left) + 5 + "px";
}
function movedown() {
  box.style.top = parseInt(box.style.top) + 5 + "px";
}

document.addEventListener("keydown", moveImg);
