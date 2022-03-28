// 06/21 Pig Latin

function translatePigLatin(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let pigLatin = "";
  let cluster = "";
  
  if (vowels.includes(str[0])) {
     pigLatin = str + "way";
  } else {
    for(let i = 0; i < str.length; i++) {
      if (!vowels.includes(str[i])) {
        cluster += str[i];
      } else {
        pigLatin = str.substring(i) + cluster + "ay";
        break;
      }
    pigLatin = str + "ay";
    }
  }
  return pigLatin;
}

console.log(translatePigLatin("rhythm"));
