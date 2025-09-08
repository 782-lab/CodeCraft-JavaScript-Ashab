
function camelToSnake(s){
  return s.replace(/([A-Z])/g, "_$1").toLowerCase();
}
console.log(camelToSnake("helloWorldFromJS"));
