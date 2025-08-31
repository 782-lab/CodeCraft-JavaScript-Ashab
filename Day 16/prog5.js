// Day 16 - Program 5: String to Title Case
// String to Title Case
function toTitleCase(s) {
  return s
    .toLowerCase()
    .split(" ")
    .map(w=>w ? w[0].toUpperCase()+w.slice(1) : w)
    .join(" ");
}
console.log(toTitleCase("hello world from javascript"));
