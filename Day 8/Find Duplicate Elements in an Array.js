function findDuplicates(arr) {
  let duplicates = [];
  let seen = new Set();
  for (let num of arr) {
    if (seen.has(num)) {
      duplicates.push(num);
    } else {
      seen.add(num);
    }
  }
  return duplicates;
}

console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1])); // [2, 1]
