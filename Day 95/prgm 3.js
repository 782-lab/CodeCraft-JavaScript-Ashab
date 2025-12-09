function uniqueBy(arr, key){
  const seen=new Set(); const out=[];
  for(const item of arr){
    const k=item[key];
    if(!seen.has(k)){ seen.add(k); out.push(item); }
  }
  return out;
}
console.log(uniqueBy([{id:1},{id:2},{id:1}], 'id'));
