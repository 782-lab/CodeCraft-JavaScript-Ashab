function findLargest(arr) {
  let largest = arr[0];
  for (let num of arr) {
    if (num > largest) {
      largest = num;
    }
  }
  return largest;
}

console.log(findLargest([10, 25, 98, 34, 55]));  // 98
