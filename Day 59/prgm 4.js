function isBalanced(s){
  const stack=[], map={")":"(", "]":"[", "}":"{"};
  for(const ch of s){
    if("([{".includes(ch)) stack.push(ch);
    else if(")]}".includes(ch)){
      if(stack.pop()!==map[ch]) return false;
    }
  }
  return stack.length===0;
}
console.log(isBalanced("{[()]}"));
console.log(isBalanced("{[(])}"));