function romanToInt(s){
  const map={I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
  let res=0;
  for(let i=0;i<s.length;i++){
    const v=map[s[i]], next=map[s[i+1]]||0;
    res += v < next ? -v : v;
  }
  return res;
}
console.log(romanToInt("MCMXCIV")); // 1994