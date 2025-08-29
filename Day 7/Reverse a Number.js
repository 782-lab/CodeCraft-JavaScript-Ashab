function reverseNumber(num) {
  let reversed = parseInt(num.toString().split("").reverse().join(""));
  console.log(`Reverse of ${num} is ${reversed}`);
}

reverseNumber(12345);
