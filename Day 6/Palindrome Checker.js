function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log("madam is palindrome?", isPalindrome("madam"));
console.log("hello is palindrome?", isPalindrome("hello"));