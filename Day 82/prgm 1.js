function chunk(arr, size){
  const out=[];
  for(let i=0;i<arr.length;i+=size) out.push(arr.slice(i,i+size));
  return out;
}
console.log(chunk([1,2,3,4,5,6,7],3));