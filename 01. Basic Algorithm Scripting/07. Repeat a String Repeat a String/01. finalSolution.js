// 07/16 Repeat a String Repeat a String

function repeatStringNumTimes(str, num) {
  let finalString = "";

  if (num <= 0) {
    return finalString;
  } else {
    for (let i = 1; i <= num; i++) {
      finalString += str
    }
    return finalString;
  }
}

repeatStringNumTimes("abc", 3); // abcabcabc
