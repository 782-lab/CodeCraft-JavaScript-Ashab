function gcd(a,b){ return b===0 ? Math.abs(a) : gcd(b, a%b); }
console.log("gcd(48,18):", gcd(48,18));
