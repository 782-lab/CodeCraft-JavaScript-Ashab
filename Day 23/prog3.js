// Day 23 - Program 3: Truncate String with Ellipsis
// Truncate String with Ellipsis
function truncate(s, n){
  return s.length<=n ? s : s.slice(0,n-3)+"...";
}
console.log(truncate("This is a long sentence", 12));
