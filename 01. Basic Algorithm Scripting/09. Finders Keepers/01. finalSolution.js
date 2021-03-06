// 09/16 Finders Keepers

function findElement(arr, func) {
  for (let i = 0; i <= arr.length-1; i++) {
    if (func(arr[i])) {
      return arr[i]
    }
  }
  return undefined
}

findElement([1, 2, 3, 4], num => num % 2 === 0); // 2
