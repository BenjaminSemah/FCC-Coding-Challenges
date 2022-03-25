// 06/21 Confirm the Ending

function confirmEnding(str, target) {
  const strLength = str.length;
  const subLength = str.length-target.length;

  const lastLetters = str.substring(subLength, strLength);
  return (lastLetters === target);
}

confirmEnding("Bastian", "n"); // true
