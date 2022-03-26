// 13/16 Falsy Bouncer

function bouncer(arr) {
  let finalArray = arr.filter(data => {
    if (Boolean(data)) {
      return data
    }
  })
  return finalArray;
}

bouncer([7, "ate", "", false, 9]); // [7, "ate", 9]
