function canBeSubContrsucted(fullstr) {
  let result = false
  for (let i = 0; i <= (fullstr.length / 2); i++) {
    const strLen = fullstr.length
    const subStr = fullstr.substring(0, i + 1)
    const subStringLen = subStr.length

    const numOfmacthes = fullstr.match(new RegExp(subStr, "g")).length

    if ((numOfmacthes * subStringLen) == strLen) {
      result = true
      break
    }
  }

  return result
}

// console.log(canBeSubContrsucted("abab"))
// console.log(canBeSubContrsucted("aba"))
// console.log(canBeSubContrsucted("abaaba"))
console.log(canBeSubContrsucted("agoagoago"))
// console.log(canBeSubContrsucted("abcabcabcabc"))