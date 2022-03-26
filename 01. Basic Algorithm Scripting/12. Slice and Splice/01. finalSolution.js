// 12/16 Slice and Splice

function frankenSplice(arr1, arr2, n) {
  let result = [
    ...arr2.slice(0, n), ...arr1, ...arr2.slice(n, arr2.length)
  ]
  return result;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1); // [ 4, 1, 2, 3, 5, 6 ]
