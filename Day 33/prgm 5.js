function freq(arr){
  const map={};
  for(const x of arr) map[x]=(map[x]||0)+1;
  return map;
}
console.log(freq(["a","b","a","c","b","a"]));