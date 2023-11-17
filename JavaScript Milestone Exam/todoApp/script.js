let input = document.querySelector("input");
let li = document.querySelector(".unList");
let button = document.querySelector("button");
let p = document.querySelector("p");
let list2 = [];

button.addEventListener("click", () => {
  let mainList = document.createElement("li");
  li.style.visibility = "visible";
  let item1 = input.value;
  mainList.innerText = item1;
  li.appendChild(mainList);
});
