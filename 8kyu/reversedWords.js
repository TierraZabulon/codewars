// Complete the solution so that it reverses all of the words within the string passed in.

// Example(Input --> Output):
function reverseWords(str) {
  let str1 = str.split(" ");
  let strR = str1.reverse();
  let strJ = strR.join(" ");
  return strJ;
}
