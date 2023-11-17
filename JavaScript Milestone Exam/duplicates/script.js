const arr = [
  "laptop",
  "mobile",
  "laptop",
  "car",
  "bus",
  "train",
  "car",
  "speaker",
  "speaker",
];

const checkDuplicates = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] == array[j]) {
        array.splice(j, j);
      }
    }
  }
};
checkDuplicates(arr);
console.log(arr);
