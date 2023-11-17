const arr1 = [1, 2, 3, 4, 5];

function doubleCB(arr, func) {
  return arr.map((num) => {
    return func(num);
  });
}

function callback(num) {
  return num * 2;
}

console.log(doubleCB(arr1, callback));
