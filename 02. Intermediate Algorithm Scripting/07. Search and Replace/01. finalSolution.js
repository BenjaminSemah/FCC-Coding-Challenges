// 07/21 Search and Replace

function myReplace(str, before, after) {
  let finalStr = "";
  let firstB = before[0];
  let firstA = after[0];
  
  firstB === firstB.toLowerCase()
  ? finalStr = str.replace(before, firstA.toLowerCase() + after.substring(1))
  : finalStr = str.replace(before, firstA.toUpperCase() + after.substring(1))

  return finalStr;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
