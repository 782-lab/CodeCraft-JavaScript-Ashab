function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  if (str === reversed) {
    console.log(`${str} is a Palindrome`);
  } else {
    console.log(`${str} is NOT a Palindrome`);
  }
}

isPalindrome("madam");
isPalindrome("hello");
