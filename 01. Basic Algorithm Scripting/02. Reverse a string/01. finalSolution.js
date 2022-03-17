function reverseString(str) {
  let finalString = str.split('').reverse().join('')
  return finalString;
}

reverseString("hello"); // "olleh"
