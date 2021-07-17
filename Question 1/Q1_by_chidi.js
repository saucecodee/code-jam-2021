let diff = (prev, next) => next - prev;

let getNoOfCharactersToRemove = (differences) => {
  let noOfCharactersToRemove = 0;
  for (let i = 0; i < differences.length; i++) {
    if (i + 1 === differences.length) break;
    let prev = differences[i];
    let next = differences[i + 1];
    if ((prev < 0 && next > 0) || (prev > 0 && next < 0)) continue;
    noOfCharactersToRemove++;
  }
  return noOfCharactersToRemove;
};

let getDifferencesArray = (nums) => {
  let differences = [];
  for (let i = 0; i < nums.length; i++) {
    if (i + 1 === nums.length) break;
    let prev = nums[i];
    let next = nums[i + 1];
    differences.push(diff(prev, next));
  }
  return differences;
};

let getLongestWiggleLength = (nums) => {
  let differences = getDifferencesArray(nums);
  return nums.length - getNoOfCharactersToRemove(differences);
};

let longestWiggleLength = getLongestWiggleLength([
  8, 10, 7, 7, 10, 8, 2, 1, 12,
]);

console.log(longestWiggleLength);
