function median(arr){
  const a=[...arr].sort((x,y)=>x-y);
  const n=a.length;
  return n%2 ? a[(n-1)/2] : (a[n/2-1]+a[n/2])/2;
}
console.log("Median:", median([7,1,3,4,5]));