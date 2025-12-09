function flattenOnce(arr){
  return arr.reduce((acc, cur)=> acc.concat(cur), []);
}
console.log(flattenOnce([[1,2],[3,4],[5]]));
