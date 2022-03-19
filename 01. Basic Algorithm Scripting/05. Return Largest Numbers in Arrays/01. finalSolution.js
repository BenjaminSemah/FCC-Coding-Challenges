// Final Solution (Return Largest Numbers in Arrays)

function largestOfFour(arr) {
  const largeNums = arr.map(subArray => {
    return Math.max(...subArray);
  })
  return largeNums;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); // [ 5, 27, 39, 1001 ]
