// Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!
// PREP
//Parameters: function will have three a name array, city, state
//Return: should return a string welcoming name to city and state/ name will be a array of one or more value that
//should be joined together
//Example:below
//Psudocode: will have to use a template literal for return. use the join method on name to make it into one

// function sayHello( name, city, state ) {
//   let nameArr = name.join(" ")
//   let str = `Hello, ${nameArr}! Welcome to ${city}, ${state}!`
//   return str
// }

const sayHello = (name, city, state) => {
  return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
};
