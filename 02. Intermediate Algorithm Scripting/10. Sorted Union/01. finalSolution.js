// 10/21 Sorted Union 

function uniteUnique(arr) {
  const originalArrays = Object.values(arguments);

  let finalArray = [];
  
  originalArrays.forEach(subArray => {
    subArray.forEach(number => {
      if (!finalArray.includes(number)) {
        finalArray.push(number);
      }
    });
  });
  
  return finalArray; 
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// [ 1, 3, 2, 5, 4 ]
