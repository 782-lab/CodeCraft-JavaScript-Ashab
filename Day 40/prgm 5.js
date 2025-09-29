function sumOfDigits(num) {
  let n = Math.abs(num), sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}
console.log(sumOfDigits(12345));
