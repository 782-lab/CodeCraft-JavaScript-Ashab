// Day 23 - Program 2: Snake_case to camelCase
// Snake_case to camelCase
function snakeToCamel(s){
  return s.toLowerCase().replace(/(_\w)/g, m=>m[1].toUpperCase());
}
console.log(snakeToCamel("hello_world_from_js"));
