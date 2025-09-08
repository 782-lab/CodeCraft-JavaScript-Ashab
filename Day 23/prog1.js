// Day 23 - Program 1: CamelCase to Snake_case
// CamelCase to Snake_case
function camelToSnake(s){
  return s.replace(/([A-Z])/g, "_$1").toLowerCase();
}
console.log(camelToSnake("helloWorldFromJS"));
