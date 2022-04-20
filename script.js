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
