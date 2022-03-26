// 11/16 Title Case a Sentence

function titleCase(str) {
  const lowerCase = str.toLowerCase();
  const splitString = lowerCase.split(' ');
  const capitalizeFirst = splitString.map(word => {
    return word[0].toUpperCase() + word.substring(1, word.length)
  })

  const finalString = capitalizeFirst.join(' ')
  return finalString;
}

titleCase("I'm a little tea pot"); // I'm A Little Tea Pot
