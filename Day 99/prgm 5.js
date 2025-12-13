function mode(arr){
  const c={}; let best=null, bestCount=0;
  for(const x of arr){ c[x]=(c[x]||0)+1; if(c[x]>bestCount){ best=x; bestCount=c[x]; } }
  return best;
}
console.log("Mode:", mode([1,2,2,3,3,3,4]));


