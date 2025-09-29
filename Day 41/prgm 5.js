const nums = [1,2,3,4,5,6,7,8];
const result = nums
  .filter(n=>n%2===0)
  .map(n=>n*n)
  .reduce((a,b)=>a+b,0);
console.log("Result:", result);