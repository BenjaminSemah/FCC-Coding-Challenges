// 08/21 DNA Pairing

function pairElement(str) {
  let finalArray = [];

  for (let i=0; i<str.length; i++) {
    switch(str[i]) {
      case 'A':
        finalArray.push(["A", "T"])
        break;
      case 'T':
        finalArray.push(["T", "A"])
        break;
      case 'C':
        finalArray.push(["C", "G"])
        break;
      case 'G':
        finalArray.push(["G", "C"])
        break;
      default:
        return 'value not found';
    }
  }
  return finalArray;
}

pairElement("GCG");
