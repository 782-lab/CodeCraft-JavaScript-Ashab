function reverseNumber(num) {
  let reversed = parseInt(num.toString().split("").reverse().join(""));
  console.log(`Reverse of ${num} is ${reversed}`);
}

// Example
reverseNumber(12345);
