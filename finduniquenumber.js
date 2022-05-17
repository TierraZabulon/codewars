// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
  let duplicate = "",
    i = 0;
  let myMap = new Map();

  while (duplicate === "") {
    console.log("checking", i, arr[i], duplicate);
    if (myMap.has(arr[i])) {
      duplicate = arr[i];
    } else {
      myMap.set(arr[i], "seen");
    }
    i++;
  }

  for (let element of arr) {
    if (element != duplicate) {
      return element;
    }
  }
}

//or

function findUniq(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] == arr[1] ? arr.pop() : arr[0];
}
