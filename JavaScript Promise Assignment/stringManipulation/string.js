function manipulateString(str, func) {
  let newString = str.toUpperCase();
  return func(newString);
}

function logString(str) {
  console.log(`The manipulated string is: ${str}`);
}

manipulateString("hello, world!", logString);
