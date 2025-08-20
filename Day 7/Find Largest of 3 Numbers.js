function findLargest(a, b, c) {
  if (a >= b && a >= c) {
    console.log(`${a} is the largest`);
  } else if (b >= a && b >= c) {
    console.log(`${b} is the largest`);
  } else {
    console.log(`${c} is the largest`);
  }
}

// Example
findLargest(15, 42, 23);
