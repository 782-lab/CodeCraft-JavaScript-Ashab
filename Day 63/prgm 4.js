function isEmail(s){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}
console.log(isEmail("test@example.com"), isEmail("bad@com"));