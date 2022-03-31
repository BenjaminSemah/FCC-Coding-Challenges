// 09/21 Missing Letters

function fearNotLetter(str) {

  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i+1) - str.charCodeAt(i) > 1) {
      const missingIndex = str.charCodeAt(i) + 1;
      return String.fromCharCode(missingIndex);
    }
  } 
  return undefined
}

fearNotLetter("abce"); // "d"
