/***
 * Destructuring with Assignments
 */

console.log(`Destruct with Assignments`);

//With out destructuring
const destruct = ["One", "Two", "Three", "Four"];

const one = destruct[0];
const two = destruct[1];
const three = destruct[2];
const four = destruct[3];

console.log(one, two, three, four);

//With Destructuring

const [a, b, c, d] = destruct;

console.log(a, b, c, d);
