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

//Complete the solution so that it reverses the string passed into it.
function solution(str) {
  let stringSplit = str.split("");
  let reverseStr = stringSplit.reverse("");
  let joinStr = reverseStr.join("");
  return str.split("").reverse("").join("");
}

solution("world");

//Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

function greet(name, owner) {
  // Add code here
  if (name === owner) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}
