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

const displayValue = document.querySelector(".displayValue");
const calculatorButtons = document.querySelectorAll("button");

let num1 = 0;
let num2 = 0;

function getNumericValue() {
  calculatorButtons.forEach(button => {
    button.addEventListener("click", () => {
      displayValue.textContent += button.textContent;
      if (clearCalculation()) {
        displayValue.textContent = "";
      } else if (numericMaxLength()) {
        displayValue.textContent = displayValue.textContent.substring(0, 7);
      } else {
        return value = displayValue.textContent;
      }
    })
  })
}

function clearCalculation() {
  return displayValue.textContent.includes("CE");
}

function numericMaxLength() {
  return displayValue.textContent.length > 7;
}



getNumericValue();

