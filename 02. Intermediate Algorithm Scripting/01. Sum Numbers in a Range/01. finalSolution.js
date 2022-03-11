// Final Solution (Sum Numbers in a Range 01/21)

function sumAll(arr) {
  const sorted = arr.sort((a, b) => a - b)
  let finalSum = 0;
  for (let i = sorted[0]; i <= sorted[1]; i++) {
    finalSum += i;
  }
  return finalSum;
}

sumAll([1, 4]); // 10
