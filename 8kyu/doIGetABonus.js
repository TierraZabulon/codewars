// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
function bonusTime(salary, bonus) {
  let s = salary * 10;
  s = s.toString();
  let n = salary.toString();

  if (bonus === true) {
    return "\u00A3" + s;
  } else {
    return "\u00A3" + n;
  }
}
//best practice
function bonusTime(salary, bonus) {
  return bonus ? `£${10 * salary}` : `£${salary}`;
}
///
