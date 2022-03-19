function findLongestWordLength(str) {
  const strArray = str.split(" ");
  const lengthArray = strArray.map(word => word.length);
  const longestWordLength = Math.max(...lengthArray);

  return longestWordLength
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); // 6
