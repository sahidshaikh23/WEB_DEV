function convertToNumber(str) {
  try {
    let equiNum = parseInt(str);
    let newStr = equiNum.toString();

    if (newStr == "NaN") {
      throw "Invalid Number";
    } else {
      console.log(equiNum);
    }
  } catch (err) {
    console.log(err);
  }
}

convertToNumber("154");
