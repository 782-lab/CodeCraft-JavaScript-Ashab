function reverseNumber(num) {
  let n = Math.abs(num), rev = 0;
  while (n > 0) {
    rev = rev * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return num < 0 ? -rev : rev;
}
console.log(reverseNumber(12345));