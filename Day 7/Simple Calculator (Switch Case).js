function calculator(a, b, operator) {
  switch (operator) {
    case "+":
      console.log(`Result: ${a + b}`);
      break;
    case "-":
      console.log(`Result: ${a - b}`);
      break;
    case "*":
      console.log(`Result: ${a * b}`);
      break;
    case "/":
      console.log(`Result: ${a / b}`);
      break;
    default:
      console.log("Invalid operator");
  }
}

// Example
calculator(10, 5, "+");
calculator(10, 5, "*");
