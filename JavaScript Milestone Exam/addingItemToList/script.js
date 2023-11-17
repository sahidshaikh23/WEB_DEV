let list = ["Item1", "Item2", "Item3", "Item4", "Item5"];
let li = document.querySelector(".unList");
let button = document.querySelector("button");
let p = document.querySelector("p");
let list2 = [];

button.addEventListener("click", () => {
  if (list.length > 0) {
    let mainList = document.createElement("li");
    let item1 = list.shift();
    mainList.innerText = item1;
    li.appendChild(mainList);
  } else {
    p.innerText = "No item left in the list";
  }
});
