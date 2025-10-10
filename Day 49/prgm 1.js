function sumRange(min,max){
  let s=0; for(let i=min;i<=max;i++) s+=i; return s;
}
console.log(sumRange(1,100));