//Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

let array = [1, 5.2, 4, 0, -1];

function sum(array) {
  let res = 0;
  for (let i = 0; i < array.length; i++) {
    res = res + array[i];
  }
  return res;
}
console.log(sum(array));

//Fix the function
//I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.

function addFive(num) {
  var total = num + 5;
  return total;
}
