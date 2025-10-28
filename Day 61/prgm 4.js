function charCount(s){
  const map={};
  for(const ch of s) map[ch]=(map[ch]||0)+1;
  return map;
}
console.log(charCount("bananas"));