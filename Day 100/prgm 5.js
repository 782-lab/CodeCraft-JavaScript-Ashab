function isPangram(s){
  const set=new Set();
  for(const ch of s.toLowerCase()) if(ch>='a' && ch<='z') set.add(ch);
  return set.size===26;
}
console.log(isPangram("The quick brown fox jumps over a lazy dog"));
