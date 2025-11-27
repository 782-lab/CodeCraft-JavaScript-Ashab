function debounce(fn, delay){
  let t;
return (...args)=>{
    clearTimeout(t);
    t=setTimeout(()=>fn(...args), delay);
  };
}
// Example (uncomment to test in browser): window.addEventListener('resize', debounce(()=>console.log('resized'), 300));
console.log("Debounce defined");
