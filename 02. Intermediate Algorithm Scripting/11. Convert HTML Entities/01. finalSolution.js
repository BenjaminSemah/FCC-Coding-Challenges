// 11/21 Convert HTML Entities

function convertHTML(str) {
  const strSplit = str.split('')
  
  const strMap = strSplit.map(item => {
    switch (item) {
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
      return item;
    }
  });

  const finalStr = strMap.join('')  
  
  return finalStr;
}

convertHTML("Dolce & Gabbana");
