let arr = [2, 6, 3, 2, 1, 6, 7, 8, 4, 15];
let newArr = [];
function checkDivisiblity(array) {
  array.forEach((element) => {
    if (element % 3 == 0 && element % 2 != 0) {
      newArr.push(element);
    }
  });
}

checkDivisiblity(arr);
console.log(newArr);
