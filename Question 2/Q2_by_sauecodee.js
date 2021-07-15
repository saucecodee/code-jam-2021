function weightOfStoneLeft(stoneArr) {
  let sortedArr = stoneArr.sort((a, b) => a - b)
  let i = sortedArr.length - 1

  while (i >= 0) {
    if (sortedArr.length == 0) return 0
    if (sortedArr.length == 1) return sortedArr[0]

    const bigStone = sortedArr[i];
    const smallStone = sortedArr[i - 1];


    if (bigStone > smallStone) {
      const diff = (bigStone - smallStone)
      sortedArr = [diff, ...sortedArr].sort()
    }

    sortedArr.pop()
    sortedArr.pop()

    i = i - 1
  }
}

console.log(weightOfStoneLeft([2,7,4,1,7,1]))