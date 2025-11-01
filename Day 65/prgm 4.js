function countVowels(str) {
  const v = "aeiouAEIOU";
  let c = 0;
  for (const ch of str) if (v.includes(ch)) c++;
  return c;
}
console.log(countVowels("Ashab Akhtar"));
