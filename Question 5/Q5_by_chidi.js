let findMatch = (testString, mainString) => {
  let result = "";
  let mainStringLength = mainString.split("").length
  let testStringLength = testString.split("").length

  let repeatCount = mainStringLength / testStringLength
  for (let i = 0; i < repeatCount; i++) {
    result += testString
  }
  return result == mainString
}

let repeatedPatterns = (string) => {
  let stringArray = string.split("")
  let testString = ""
  for (let i = 0; i < stringArray.length; i++) {
    testString += stringArray[i]

    let mainStringLength = stringArray.length
    let testStringLength = testString.split("").length

    if (mainStringLength % testStringLength !== 0) break
    if (findMatch(testString, string)) return true
  }
  return false
}

const isRepeated = repeatedPatterns("abcabcabcabc")
console.log(isRepeated)