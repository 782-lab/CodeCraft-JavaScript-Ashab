function difference(a,b){
  const set=new Set(b);
  return a.filter(x=>!set.has(x));
}
console.log(difference([1,2,3,4],[2,4]));