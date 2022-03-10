// Final Solution for Challenge 12/16

function frankenSplice(arr1, arr2, n) {
  let beforeArr1 = arr2.slice(0, n);
  let afterArr1 = arr2.slice(n);
  let newArr = [...beforeArr1, ...arr1, ...afterArr1]

  return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1); // [4, 1, 2, 3, 5, 6]
