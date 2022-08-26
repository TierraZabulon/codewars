// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

function invert(array) {
  const myFunction = (num) => {
    if (num < 0) {
      return Math.abs(num);
    } else if ((num) => 0) {
      return -num;
    }
  };
  let newArr = array.map(myFunction);
  return newArr;
}
