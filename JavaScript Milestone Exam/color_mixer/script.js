let color1 = document.querySelector(".color_one");
let color2 = document.querySelector(".color_two");
let new_color = document.querySelector(".output_color");
let bodyBackground = document.querySelector("body");

let button = document.querySelector("button");

new_color.style.backgroundColor = "#000000";
new_color.style.color = "#ffffff";
new_color.style.fontSize = "40px";
new_color.style.fontWeight = "900";
new_color.style.borderRadius = "20px";

button.addEventListener("click", () => {
  if (
    (color1.value == "Red" && color2.value == "Blue") ||
    (color1.value == "Blue" && color2.value == "Red")
  ) {
    new_color.style.padding = "10px 30px";
    bodyBackground.style.backgroundColor = "#db34eb";
    new_color.innerText = "New Color Will Be PURPLE";
  } else if (
    (color1.value == "Red" && color2.value == "Yellow") ||
    (color1.value == "Yellow" && color2.value == "Red")
  ) {
    new_color.style.padding = "10px 30px";
    bodyBackground.style.backgroundColor = "#fa6c00";
    new_color.innerText = "New Color Will Be ORANGE";
  } else if (
    (color1.value == "Blue" && color2.value == "Yellow") ||
    (color1.value == "Yellow" && color2.value == "Blue")
  ) {
    bodyBackground.style.backgroundColor = "#00ff00";
    new_color.style.padding = "10px 30px";
    new_color.innerText = "New Color Will Be GREEN";
  } else if (color1.value == "Blue" && color2.value == "Blue") {
    bodyBackground.style.backgroundColor = "#0000ff";
    new_color.style.padding = "10px 30px";
    new_color.innerText = "No change ";
  } else if (color1.value == "Yellow" && color2.value == "Yellow") {
    bodyBackground.style.backgroundColor = "#fae900";
    new_color.style.padding = "10px 30px";
    new_color.innerText = "No change ";
  } else if (color1.value == "Red" && color2.value == "Red") {
    bodyBackground.style.backgroundColor = "#ff0000";
    new_color.style.padding = "10px 30px";
    new_color.innerText = "No change ";
  } else {
    bodyBackground.style.backgroundColor = "#000000";
    new_color.style.padding = "10px 30px";
    new_color.innerText = "Wrong Combination";
  }
});
