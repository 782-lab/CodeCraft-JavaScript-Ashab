function randInt(min, max){
  return Math.floor(Math.random()*(max-min+1))+min;
}
console.log("Random 1-100:", randInt(1,100));