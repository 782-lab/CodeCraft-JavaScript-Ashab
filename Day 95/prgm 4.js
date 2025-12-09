function toQuery(obj){
  return Object.keys(obj)
    .map(k=>encodeURIComponent(k)+"="+encodeURIComponent(obj[k]))
    .join("&");
}
console.log(toQuery({name:"Ashab", city:"Hajipur"}));