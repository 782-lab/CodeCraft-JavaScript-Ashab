function throttle(fn, limit){
  let inThrottle=false, lastArgs=null;
  return function(...args){
    if(!inThrottle){
      fn.apply(this,args);
      inThrottle=true;
      setTimeout(()=>{
        inThrottle=false;
        if(lastArgs){ fn.apply(this,lastArgs); lastArgs=null; }
      }, limit);
    } else {
      lastArgs=args;
    }
  };
}
console.log("Throttle defined");
