// 05/21 Spinal Tap Case

function spinalCase(str) {
  const spacedString = str.replace(/([a-z])([A-Z])/g, "$1 $2")
  const dashedString = spacedString.replace(/\s|_/g, "-")
  const finalString = dashedString.toLowerCase()
  return finalString;
}

spinalCase('This Is Spinal Tap'); // this-is-spinal-tap
