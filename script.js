// screen kalkulator diinisialisasi ke variabel
const calculatorScreen = document.querySelector(".calculator-screen");

// tombol-tombol number diinisialisasi ke variabel
const numbers = document.querySelectorAll(".number");
// tombol-tombol operator diinisialisasi ke variabel
const operators = document.querySelectorAll(".operator");
// memasukan = ke dalam variabel
const equalSign = document.querySelector(".equal-sign");
// memasukan AC ke variabel
const clearBtn = document.querySelector(".all-clear");
// memasukan desimal ke variabel
const decimal = document.querySelector(".decimal");

// variabel2 untuk mendefinisikan nilai awal nilai sebelum dan operator
let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

// fungsi untuk update screen kalkulator
const updateScreen = (number) => {
  calculatorScreen.value = number;
};

// fungsi untuk mengupdate var currentNumber
const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

// menambahkan event onClick di tiap tiap tombol number
numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    // memanggil fungsi update screen
    updateScreen(currentNumber);
  });
});

const inputOperator = (operator) => {
  if (calculationOperator === "") {
    prevNumber = currentNumber;
  }

  calculationOperator = operator;
  currentNumber = "0";
};

// menambahkan event onClick di tiap tiap tombol operator
operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});

// menampilkan = di console
equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});

// fungsi perhitungannya
const calculate = () => {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = prevNumber - currentNumber;
      break;
    case "*":
      result = prevNumber * currentNumber;
      break;
    case "/":
      result = prevNumber / currentNumber;
      break;
    default:
      break;
  }
  // menampilkan hasil di layar
  currentNumber = result;
  calculationOperator = "";
};

const clearAll = () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
};

// fungsi untuk menghapus angka yang ada di layar
clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});

inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};

decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});
