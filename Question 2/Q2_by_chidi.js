
let getHeaviestStones = (weights) => {
  let sortedWeights = weights.sort((a, b) => a - b);
  let y = sortedWeights[sortedWeights.length - 1];
  let x = sortedWeights[sortedWeights.length - 2];

  return { x, y };
};

let getWeightsAfterSmashing = (weights, x, y) => {
  let sortedWeights = weights.sort((a, b) => a - b);  
  let diff = y - x;
  if (diff === 0) {
    sortedWeights.pop()
    sortedWeights.pop()
  }
  if (diff > 0) {
    sortedWeights.pop()
    sortedWeights.pop()
    sortedWeights.push(diff)
  }
  return sortedWeights;
};

let finalWeight = (weights) => {
  const { x, y } = getHeaviestStones(weights);

  const newWeights = getWeightsAfterSmashing(weights, x, y);

  if (newWeights.length > 1) return finalWeight(weights);
  if (newWeights.length === 1) return newWeights[0];
  return 0;
};


let weights = [2, 4, 1, 8, 1];
const result = finalWeight(weights);
console.log(result);
