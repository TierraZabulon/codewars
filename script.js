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

//create a  function that calculates bmi
function bmi(weight, height) {
  let bmiTest = weight / (height * height);

  if (bmiTest <= 18.5) {
    return "Underweight";
  } else if (bmiTest <= 25.0) {
    return "Normal";
  } else if (bmiTest <= 30.0) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

bmi(100, 55);

//create a function that will determine if there is enough fuel to make it to the gas station

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  let makeIt = distanceToPump / mpg;
  if (makeIt <= fuelLeft) {
    return true;
  } else {
    return false;
  }
};

zeroFuel(50, 25, 2);

//We need a function that can transform a number into a string.
function numberToString(num) {
  // Return a string of the number here!
  return num.toString();
}
//Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

//Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2) {
  // moment of truth
  if (flower1 % 2 == 0 && flower2 % 2 !== 0) {
    return true;
  } else if (flower2 % 2 == 0 && flower1 % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}
//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord(bool) {
  //...
  if (bool === true) {
    return "Yes";
  } else if (bool === false) {
    return "No";
  }
}

//Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

function greet(name) {
  //your code here
  let userName = name;
  return `Hello, ${name} how are you doing today?`;
}

//Write a function to split a string and convert it into an array of words.
function stringToArray(string) {
  // code code code
  const strings = string.split(" ");
  return strings;
}

//Complete the function to return his total number of goals in all three leagues.
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  // code goes here
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

//Write a function called repeatStr which repeats the given string string exactly n times.

function repeatStr(n, s) {
  return s.repeat(n);
}

//Write a function which converts the input string to uppercase.
function makeUpperCase(str) {
  // Code here
  return str.toUpperCase();
}

//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
function simpleMultiplication(number) {
  // your code........
  if (number % 2 === 0) {
    return number * 8;
  } else {
    return number * 9;
  }
}

// create a function that removes the first and last characters of a string.

function removeChar(str) {
  //You got this!
  return str.slice(1, -1);
}
//Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
function rentalCarCost(d) {
  // Your solution here
  let rentalCost = 40 * d;
  if (d >= 7) {
    return rentalCost - 50;
    console.log(rentalCost);
  } else if (d >= 3) {
    return rentalCost - 20;
  } else {
    return rentalCost;
  }
}
//8kyu continued//green
//We need a simple function that determines if a plural is needed or not.
function plural(n) {
  return n !== 1;
}

//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
  return -Math.abs(num);
}

//Simple, remove the spaces from the string, then return the resultant string.
function noSpace(x) {
  return x.split(" ").join("");
}

//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
function digitize(n) {
  //code here
  return Array.from(String(n), Number).reverse();

  console.log(n);
}

//Find the mean (average) of a list of numbers in an array.
var findAverage = function (nums) {
  // Code here
  return nums.reduce((acc, cur) => acc + cur) / nums.length;
};

// I want to get the sum of two arrays...actually the sum of all their elements
function arrayPlusArray(arr1, arr2) {
  let arrSum1 = arr1.reduce((acc, cur) => acc + cur, 0);
  let arrSum2 = arr2.reduce((acc, cur) => acc + cur, 0);
  return arrSum1 + arrSum2;
}
//Add the value "codewars" to the websites array.
var websites = [];
websites.push("codewars");

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
function sumMix(x) {
  let stringArray = x;
  let numberArray = [];
  let length = stringArray.length;
  for (let i = 0; i < length; i++) {
    numberArray.push(parseInt(stringArray[i]));
  }
  console.log(numberArray);
  return numberArray.reduce((a, c) => a + c, 0);
}

//You are trying to put a hash in ruby or an object in javascript or java into an array, but it always returns error, solve it and keep it as simple as possible!
items = [];
const obj = { a: "b", c: "d" };
items.push(obj);

//Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.
//arr1 and arr2 may have same integers. Remove duplicated in the returned result.
function mergeArrays(arr1, arr2) {
  let merge = arr1.concat(arr2);
  let sorted = merge.sort((a, b) => a - b);
  let filtered = sorted.filter((c, index) => {
    return sorted.indexOf(c) === index;
  });

  return filtered;
}
//Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
function sortByLength(array) {
  // Return an array containing the same strings, ordered from shortest to longest
  let myArray = array;
  let sort = myArray.sort((a, b) => a.length - b.length);
  return sort;
}

//JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

function getEvenNumbers(numbersArray) {
  // filter out the odd numbers
  return numbersArray.filter((number) => {
    return number % 2 === 0;
  });
}
//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
function solution(str, ending) {
  // TODO: complete
  if (str.endsWith(ending)) {
    return true;
  } else {
    return false;
  }
}

//Make a program that filters a list of strings and returns a list with only your friends name in it.
function friend(friends) {
  return friends.filter(
    (item) => typeof item === "string" && item.length === 4
  );
}

// Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
function cockroachSpeed(s) {
  let seconds = s * 27.777778;
  return Math.floor(seconds);
}
//You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
function updateLight(current) {
  if (current === "green") {
    return "yellow";
  } else if (current === "yellow") {
    return "red";
  } else if (current === "red") {
    return "green";
  }
}
//Now you have to write a function that takes an argument and returns the square of it.
function square(x) {
  let squareNum = x ** 2;
  return squareNum;
}
//Implement a function which convert the given boolean value into its string representation.
function booleanToString(b) {
  return b.toString();
}
//Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.

function smash(words) {
  return words.join(" ");
}
