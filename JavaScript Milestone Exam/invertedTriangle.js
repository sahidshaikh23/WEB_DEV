const input = 6;
let str = "";
for (let i = 1; i <= input; i++) {
  for (let j = input; j >= i; j--) {
    str += "*";
  }
  str += "\n";
}
console.log(str);
