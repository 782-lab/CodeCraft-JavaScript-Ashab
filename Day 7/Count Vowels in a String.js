function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  console.log(`Total vowels in "${str}": ${count}`);
}

// Example
countVowels("Ashab Akhtar");
