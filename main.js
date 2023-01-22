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
  if (operator === add) {
    return add(n1, n2);
  } else if (operator === subtract) {
    return subtract(n1, n2);
  } else if (operator === multiply) {
    return multiply(n1, n2) 
  } else if (operator === divide) {
    return divide(n1, n2);
  }
}
