function longestWiggleSubsequence(numArr) {
  let result = 1
  let nextStatus

  for (let i = 0; i < numArr.length; i++) {
    const currentNum = numArr[i];
    const nextNum = numArr[i + 1];


    if (i == 0 || (currentNum > nextNum) == nextStatus) {
      if (i + 1 !== numArr.length) result++
      nextStatus = (currentNum < nextNum)
    }
  }

  return result
}

console.log(longestWiggleSubsequence([1,7,4,9,2,5]))
console.log(longestWiggleSubsequence([1, 17, 5, 10, 13, 15, 10, 5, 16, 8]))
console.log(longestWiggleSubsequence([1,2,3,4,5,6,7,8,9]))
console.log(longestWiggleSubsequence([1,2,3,4,5,6,7,8,2]))
