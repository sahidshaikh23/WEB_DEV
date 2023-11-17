let tempCelcius = 34;
let tempFrh;
let toFrh = (temp) => {
  tempFrh = temp * 1.8 + 32;
};
toFrh(tempCelcius);
console.log(tempFrh);
