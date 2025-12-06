function gcd(a,b){ return b===0 ? Math.abs(a) : gcd(b, a%b); }
function lcm(a,b){ return Math.abs(a*b)/gcd(a,b); }
console.log("lcm(12,18):", lcm(12,18));
