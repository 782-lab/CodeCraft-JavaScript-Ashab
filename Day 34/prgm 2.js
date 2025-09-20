function rotate(arr, k){
  const n=arr.length; k%=n;
  return arr.slice(n-k).concat(arr.slice(0,n-k));
}
console.log(rotate([1,2,3,4,5,6,7],3));