function truncate(s, n){
  return s.length<=n ? s : s.slice(0,n-3)+"...";
}
console.log(truncate("This is a long sentence", 12));