// 15/16 Mutations

function mutation(arr) {
  const firstWord = arr[0].toLowerCase()
  const secondWord = arr[1].toLowerCase()

  for (let i = 0; i < secondWord.length; i++) {
    if (!firstWord.includes(secondWord[i])) {
      return false
    }
  }
  return true
}

mutation(["hello", "hey"]); // false
