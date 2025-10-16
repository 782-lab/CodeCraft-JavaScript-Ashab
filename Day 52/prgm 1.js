function fibonacci(n) {
  const arr = [0, 1];
  for (let i = 2; i < n; i++) arr[i] = arr[i-1] + arr[i-2];
  return arr.slice(0, n);
}
console.log("Fibonacci(10):", fibonacci(10));