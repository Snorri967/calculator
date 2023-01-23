const displayValue = document.querySelector(".displayValue");
const operatorValue = document.querySelector(".operatorValue");
const numbers = document.querySelectorAll(".number");
const clearScreen = document.querySelector(".clearButton");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equalsButton");

let firstValue = true;
let secondValue = false;

let counter = 0;

let firstNum = 0;
let secondNum = 0;

let operatorInUse = "";

displayValue.textContent = "";

numbers.forEach(num => {
  num.addEventListener("click", (event) => {
    displayValue.textContent += event.target.textContent;
    console.log(displayValue.textContent);
    numericMaxLength();
    if (firstValue) {
      firstNum = Number(displayValue.textContent);
    } else if (secondValue) {
      secondNum = Number(displayValue.textContent);
    }
  })
})

operators.forEach(operator => {
  operator.addEventListener("click", (event) => {
    operatorValue.textContent = event.target.textContent;
    operatorInUse = operatorValue.textContent;
    switchOperand();
  })
})

equals.addEventListener("click", (event) => {
  displayValue.textContent = "";
  operatorValue.textContent = event.target.textContent;
  displayValue.textContent = operate(operatorInUse, firstNum, secondNum) 
})

clearScreen.addEventListener("click", () => {
  location.reload();
})

function switchOperand() {
  counter++;
  if (counter === 1) {
    firstValue = false;
    secondValue = true;
    return displayValue.textContent = "";
  } else if (counter === 2) {
    secondValue = false;
    firstValue = true;
    return displayValue.textContent = "";
  }
}

function numericMaxLength() {
  if (displayValue.textContent.length > 10) {
    return displayValue.textContent = displayValue.textContent.substring(0, 10);
  }
}

function add(n1, n2) {
  return n1 + n2;
}

function subtract (n1, n2) {
  return n1 - n2;
}

function multiply (n1, n2) {
  return n1 * n2;
}

function divide (n1, n2) {
  return n1 / n2;
}

function operate(operator, n1, n2) {
  if (operator === "+") {
    return add(n1, n2);
  } else if (operator === "-") {
    return subtract(n1, n2);
  } else if (operator === "*") {
    return multiply(n1, n2) 
  } else if (operator === "/") {
    return divide(n1, n2);
  }
}