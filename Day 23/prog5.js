// Day 23 - Program 5: Count Characters
// Count Characters
function charCount(s){
  const map={};
  for(const ch of s) map[ch]=(map[ch]||0)+1;
  return map;
}
console.log(charCount("bananas"));
