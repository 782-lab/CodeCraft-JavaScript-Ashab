function parseCSV(s){
  return s.trim().split("\n").map(line=> line.split(",").map(x=>x.trim()));
}
console.log(parseCSV("name,age\nAshab,21\nRiya,20"));