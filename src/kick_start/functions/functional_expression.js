/**
 * Functional Expressions
 */

console.log(`Welcome of Funcional Expressions`);

const square = function (ele) {
  return ele * ele;
};

/**
 * Arrow Functions
 */
const arrowNum = (num) => num * num;

console.log(square(8));

console.log(arrowNum(3));

//Find a Factorial of Number

function findFact(num) {
  if (num <= 1) {
    return 1;
  } else if (num > 1) {
    return num * findFact(--num);
  }
}

console.log(findFact(3));
