function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return str === str.split('').reverse().join('');
}

console.log("Is 'madam' palindrome?", isPalindrome("madam"));
console.log("Is 'Ashab' palindrome?", isPalindrome("Ashab"));