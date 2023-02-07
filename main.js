const displayValue = document.querySelector(".displayValue");
const operatorValue = document.querySelector(".operatorValue");
const operands = document.querySelectorAll(".number");
const clear = document.querySelector(".clearButton");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equalsButton");
const backspace = document.querySelector(".backspace");

let firstOperand = 0;
let secondOperand = 0;

let firstOperator = "";
let secondOperator = "";

let operandDisplay = "";

let runningTotal = "";

displayValue.innerText = 0;

function getOperands() {
  operands.forEach(operand => {
    operand.addEventListener("click", () => {
      updateOperand(operand.innerText);
      limitCharacterLength();
      
    })
  })
}

getOperands();

function getOperator() {
  operators.forEach(operator => {
    operator.addEventListener("click", () => {
      updateOperator(operator.innerText);
    })
  })
}

getOperator();

function updateOperand(operand) {
  if (firstOperand !== 0 && secondOperator !== "") {
    operandDisplay += operand;
    secondOperand = operandDisplay;
    firstOperator = operatorValue.innerText;
    displayValue.innerText = operandDisplay;
  } else if (firstOperator === "") {
    operandDisplay += operand;
    displayValue.innerText = operandDisplay;
    firstOperand = operandDisplay;
  } else if (firstOperand !== 0 && firstOperator !== "") {
    operandDisplay += operand;
    displayValue.innerText = operandDisplay;
    secondOperand = operandDisplay;
  } 
}

function updateOperator(operator) {
  if (firstOperand === 0 && firstOperator === "") {
    operatorValue.innerText = "";
  } else if (firstOperand !== 0 && firstOperator === "") {
    firstOperator = operator;
    operatorValue.innerText = firstOperator;
    operandDisplay = "";
  } else if (firstOperand !== 0 && secondOperand !== 0) {
    secondOperator = operator;
    total = operate(firstOperator, Number(firstOperand), Number(secondOperand));
    if (firstOperator === "/") {
      runningTotal = parseFloat(total).toFixed(2);
    } else {
      runningTotal = total;
    }
    firstOperand = runningTotal 
    displayValue.innerText = firstOperand;
    operatorValue.innerText = secondOperator;
    secondOperand = 0;
    firstOperator = "";
    operandDisplay = "";
  }
}

function operateEquals() {
  equals.addEventListener("click", () => {
    let total = "";
    if (firstOperand === 0) {
      displayValue.innerText = "Error";
    } else if (firstOperand !== 0 && secondOperand === 0) {
      displayValue.innerText = firstOperand;
    } else if (firstOperand !== 0 && secondOperand !== 0) {
      total = operate(firstOperator, Number(firstOperand), Number(secondOperand));
      console.log(firstOperator);
      if (firstOperator === "/") {
        runningTotal = parseFloat(total).toFixed(2);
        displayValue.innerText = runningTotal
      } else {
        runningTotal = total;
      }
      displayValue.innerText = runningTotal;
      operatorValue.innerText = equals.innerText;
    }
  })
}

operateEquals();

function clearCalculator() {
  clear.addEventListener("click", () => {
    firstOperand = 0;
    secondOperand = 0;
    firstOperator = "";
    secondOperator = "";
    operandDisplay = "";
    runningTotal = "";
    displayValue.innerText = 0;
    operatorValue.innerText = "";
  })
}

clearCalculator();

function limitCharacterLength() {
  if (operandDisplay.length >= 7) {
    displayValue.innerText = operandDisplay.substring(0, 7);
  }
}

function eraseNumber() {
  backspace.addEventListener("click", () => {
    operandDisplay = operandDisplay.substring(0, operandDisplay.length - 1);
    displayValue.innerText = operandDisplay;
  })
}

eraseNumber();

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