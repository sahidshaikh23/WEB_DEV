const numArr = [1, 3, 5, 8, 7];

function numChecker(arr) {
  return function fn(num) {
    let match;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == num) {
        match = true;
        break;
      } else {
        match = false;
      }
    }
    return match;
  };
}

const checkNum = numChecker(numArr);

console.log(checkNum(6));
