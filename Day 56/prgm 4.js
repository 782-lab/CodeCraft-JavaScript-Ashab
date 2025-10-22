function selectionSort(a){
  const arr=[...a];
  for(let i=0;i<arr.length;i++){
    let min=i;
    for(let j=i+1;j<arr.length;j++) if(arr[j]<arr[min]) min=j;
    if(min!==i) [arr[i],arr[min]]=[arr[min],arr[i]];
  }
  return arr;
}
console.log(selectionSort([64,25,12,22,11]));
