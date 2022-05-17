// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x) {
  let sortArr = x.sort(function (a, b) {
    return a - b;
  });
  let multi = sortArr.reduce((acc, cur) => acc * cur);
  return multi;
}
