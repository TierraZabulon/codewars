// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
function isPangram(string) {
  let strPangram = string.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  for (let i = 0; i < alphabet.length; i++) {
    if (strPangram.indexOf(alphabet[i]) < 0) {
      return false;
    }
  }
  return true;
}

//PREP
//Paremeter: holds a string that will be tested for every case in the alphabet
//Return: test string should return true if every case in sentence otherwise false
//Example: below
//Psuedocode: Create a function that will test every case in the sentence no matter what the case
//could be done by creating a variable to hold alphabet/using a loop to check every char
