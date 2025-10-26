function intersect(a,b){
  const set=new Set(a);
  return [...new Set(b)].filter(x=>set.has(x));
}
console.log(intersect([1,2,2,3,4],[2,2,4,5]));