// 14/16 Where do I Belong

function getIndexToIns(arr, num) {
  arr.push(num)
  arr.sort((a, b) => a - b)
  const indexOfNum = arr.indexOf(num)
  return indexOfNum;
}

getIndexToIns([40, 60], 50); // 1
