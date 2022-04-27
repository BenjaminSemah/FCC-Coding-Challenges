// 11/21 Convert HTML Entities

function convertHTML(str) {
  const strSplit = str.split('')
  
  const strMap = strSplit.map(character => {
    switch (character) {
    case "&":
      return "&amp;";
    case "<":
      return "&lt;";
    case ">":
      return "&gt;";
    case '"':
      return "&quot;";
    case "'":
      return "&apos;";
    default:
      return character;
    }
  });

  const finalStr = strMap.join('')  
  
  return finalStr;
}

convertHTML("Dolce & Gabbana") // Dolce &amp; Gabbana 
