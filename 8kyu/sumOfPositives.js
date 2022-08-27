// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  x = arr.filter((z) => z > -1);
  const arrSum = x.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  }, 0);
  console.log(arrSum);
  return arrSum;
}
