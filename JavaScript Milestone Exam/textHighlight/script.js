const text = document.getElementById("text");
const words = text.textContent.split(" ");
const button = document.querySelector("button");

function highlight() {
  words.forEach((el) => {
    if (el.length >= 8) {
      const highlightedWord = document.createElement("span");
      highlightedWord.innerText = el;
      highlightedWord.style.backgroundColor = "yellow";
      text.innerHTML = text.innerHTML.replace(el, highlightedWord.outerHTML);
    }
  });
}

button.addEventListener("click", highlight);
