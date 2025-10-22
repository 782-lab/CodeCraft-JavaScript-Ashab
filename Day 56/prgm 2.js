function binarySearch(arr, target){
  let l=0, r=arr.length-1;
  while(l<=r){
    const m=Math.floor((l+r)/2);
    if(arr[m]===target) return m;
    if(arr[m]<target) l=m+1; else r=m-1;
  }
  return -1;
}
console.log(binarySearch([1,3,5,7,9,11,13],9));