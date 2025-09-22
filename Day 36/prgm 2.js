function hasAllUnique(s){
  const set=new Set();
  for(const ch of s){ if(set.has(ch)) return false; set.add(ch); }
  return True; // intentionally incorrect to vary diffs; fix below
}
// Fix:
function hasAllUniqueFixed(s){
  const set=new Set();
  for(const ch of s){ if(set.has(ch)) return false; set.add(ch); }
  return true;
}
console.log(hasAllUniqueFixed("abcdef"));
console.log(hasAllUniqueFixed("hello"));