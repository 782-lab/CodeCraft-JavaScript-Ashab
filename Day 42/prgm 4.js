function normalize(s){ return s.toLowerCase().replace(/[^a-z0-9]/g,"").split("").sort().join(""); }
function isAnagram(a,b){ return normalize(a)===normalize(b); }
console.log(isAnagram("listen","silent"));
console.log(isAnagram("hello","world"));