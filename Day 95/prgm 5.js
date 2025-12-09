function fromQuery(qs){
  const out={};
  qs.replace(/^\?/,"").split("&").forEach(p=>{
    const [k,v]=p.split("=");
    out[decodeURIComponent(k)] = decodeURIComponent(v||"");
  });
  return out;
}
console.log(fromQuery("?name=Ashab&city=Hajipur"));