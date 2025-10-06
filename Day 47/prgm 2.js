function longestWord(s){
  return s.split(/\s+/).reduce((a,b)=> b.length>a.length?b:a, "");
}
console.log(longestWord("I love modern JavaScript very much"));