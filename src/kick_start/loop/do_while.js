/**
 * do while loop Stmt repeats untill Specified Condition Evaluate to False.
 * Statement execute atleast once
 * if conditio is true then execute statement again
 *
 */

let i = 51777;

do {
  i < 123 ? (i += 1) : (i -= 1);
  console.log(i);
} while (i != 123);
