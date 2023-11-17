let arr = ["hyy", "hello", "namaste", "ram-ram", "hola"];
let newArr = [];
let twoTimes = (array) => {
  for (let i = 0; i < array.length; i++) {
    newArr.push(array[i]);
  }
};

twoTimes(arr);
let finalArray = arr.concat(newArr);
console.log(finalArray);
