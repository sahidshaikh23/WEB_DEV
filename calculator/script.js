let display = document.querySelector(".calc_display");
let btn1 = document.querySelector(".key1");
let btn2 = document.querySelector(".key2");
let btn3 = document.querySelector(".key3");
let btn4 = document.querySelector(".key4");
let btn5 = document.querySelector(".key5");
let btn6 = document.querySelector(".key6");
let btn7 = document.querySelector(".key7");
let btn8 = document.querySelector(".key8");
let btn9 = document.querySelector(".key9");
let btn0 = document.querySelector(".key0");
let btn_dot = document.querySelector(".key_dot");
let btn_plus = document.querySelector(".key_plus");
let btn_minus = document.querySelector(".key_minus");
let btn_times = document.querySelector(".key_times");
let btn_divide = document.querySelector(".key_divide");
let btn_equals = document.querySelector(".key_equals");
let reset = document.querySelector(".reset");

let str = "";

let putValue = (btn) => {
  btn.addEventListener("click", () => {
    if (btn.innerText == "=") {
      display.innerText = eval(display.innerText);
      str = display.innerText;
    } else {
      str += btn.innerText;
      display.innerText = str;
    }
  });
};

reset.addEventListener("click", () => {
  display.innerText = "";
  str = "";
});
putValue(btn1);
putValue(btn2);
putValue(btn3);
putValue(btn4);
putValue(btn5);
putValue(btn6);
putValue(btn7);
putValue(btn8);
putValue(btn9);
putValue(btn0);
putValue(btn_plus);
putValue(btn_minus);
putValue(btn_times);
putValue(btn_divide);
putValue(btn_equals);
putValue(btn_dot);
