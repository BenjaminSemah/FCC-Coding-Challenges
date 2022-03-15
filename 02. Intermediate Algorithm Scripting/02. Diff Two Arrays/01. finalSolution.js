// Final solution (Diff Two Arrays 02/21)

function diffArray(arr1, arr2) {

  const arr1Filter = arr1.filter(item => !arr2.includes(item))
  const arr2Filter = arr2.filter(item => !arr1.includes(item))
  const newArr = [...arr1Filter, ...arr2Filter]

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // [4]
