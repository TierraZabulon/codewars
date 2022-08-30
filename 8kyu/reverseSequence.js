// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = (n) => {
  let newArr = [];

  for (let i = 0; i < n; i++) {
    newArr.push(n - i);
  }
  return newArr;
};

//PREP
//Paremeter- function will hold one parameter of n with random number
//Return- should return a array counting in reverse from number in n parameter
//Example
//Psudocode - use a method that will return a new array based on the numbers in n ?? map?push?reveerse?
