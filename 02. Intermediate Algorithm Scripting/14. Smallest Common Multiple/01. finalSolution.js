// 14/21 Smallest Common Multiple

function smallestCommons(arr) {
  const sortedArray = arr.sort((a, b) => a - b);

  const smallNum = sortedArray[0]
  const bigNum = sortedArray[1]
  
  const range = bigNum - smallNum + 1;
  
  let commonMultiple = 1;
  
  for (let i = smallNum; i <= bigNum; i++) {
    commonMultiple *= i;
  }

  for (let i = bigNum; i <= commonMultiple; i += bigNum) {
    let count = 0;
    for (let j = smallNum; j <= bigNum; j++) {
      if (i % j === 0) {
        count += 1;
      }
    } 
    if (count === range) {
      return i;
    }
  }
}

smallestCommons([1, 5]); // 60
