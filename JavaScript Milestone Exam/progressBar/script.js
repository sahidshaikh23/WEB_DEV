let bar = document.querySelector("div");

let page = document.querySelector("html");
page.addEventListener("wheel", (event) => {
  if (event.deltaY > 0 && bar.clientWidth < page.clientWidth) {
    bar.style.width = bar.clientWidth + 20 + "px";
  } else if (event.deltaY < 0) {
    bar.style.width = bar.clientWidth - 20 + "px";
  }
});

// let pageScrollPercent = window.pageYOffset;
// console.log(pageScrollPercent);
// console.log(bar.clientHeight);

// window.onscroll = () => {
//   pageScrollPercent += 1;
//   console.log(pageScrollPercent);
//   if (window.pageYOffset > 1) {
//     console.log(window.pageYOffset);
//   }
// };
