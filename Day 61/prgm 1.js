function snakeToCamel(s){
  return s.toLowerCase().replace(/(_\w)/g, m=>m[1].toUpperCase());
}
console.log(snakeToCamel("hello_world_from_js"));