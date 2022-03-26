// 16/16 Chunky Monkey

function chunkArrayInGroups(arr, size) {
  let finalArray = [];

  for(let i = 0; i < arr.length; i = i+size) {
    finalArray.push(arr.slice(i, i + size))
  }
  return finalArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2); // [["a","b"]["c","d"]]
