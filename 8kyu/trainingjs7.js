function saleHotdogs(n) {
  if (n < 5) {
    return n * 100;
  } else if (n >= 5 && n < 10) {
    return n * 95;
  } else if (n >= 10) {
    return n * 90;
  }
}

//PREP
//Parameters: accept 1 parameter (n) the number of customers to buy hotdogs
//Return: test should return price of hotdogs based on the number of customers
//Example: n < 5 should return 100 per hotdog
//Psudocode: if there is only one customer in line ordering the total would come out to 100

//try as ternery
function saleHotdogs(n) {
  return n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n >= 10 ? n * 90 : null;
}

//template
//   var foo = (
//   bar === 'a' ? 1 : // if
//   bar === 'b' ? 2 : // else if
//   bar === 'c' ? 3 : // else if
//   null // else
// );
