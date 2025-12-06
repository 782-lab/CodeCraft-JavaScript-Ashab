function countWords(s) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}
console.log(countWords("  Hello   JS world   "));
