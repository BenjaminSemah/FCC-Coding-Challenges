// 04/21 Wherefore art thou

function whatIsInAName(collection, source) {
  let arr = [];
  let sourceKeys = Object.keys(source);

  arr = collection.filter((obj) => {
     return sourceKeys.every((key) => {
       return obj.hasOwnProperty(key) && obj[key] === source[key];
     });
  });

  return arr;
}
