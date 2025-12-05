function average(arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((a,b)=>a+b,0) / arr.length;
}
console.log("Average:", average([10,20,30,40]));