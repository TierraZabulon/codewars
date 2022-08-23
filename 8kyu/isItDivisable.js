//Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
function divisibleBy(numbers, divisor) {
  for (let i = 0; i < numbers.length; i++) {
    let num = numbers.filter((n) => {
      return n % divisor === 0;
    });
    return num;
    console.log(num);
  }
}
//PREP
//P paremeters: the function takes two paremeters the numbers
//and the divisor that the number will be put into
//R return: the test should return if the numbers can be divided
// by the divisor
//E example: (divisibleBy([1,2,3,4,5,6], 2), [2,4,6]);
// in the example the numbers are checking if it can be divided
// by 2. which returns the resutls that only 2,4,6 is true
//P psuedocode: if the numbers can be divided by the divisor,
// return the numbers that are true
//1.loop to test each number -> divisor 2. conditional statement?
