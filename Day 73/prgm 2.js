function mergeUnique(a,b){
  return [...new Set([...a,...b])].sort((x,y)=>x-y);
}
console.log(mergeUnique([3,1,2],[2,4,1,5]));