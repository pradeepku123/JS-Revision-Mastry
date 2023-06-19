/**
 * Welcome to Range Function
 */

console.log(`Welcome to Range Function`);
//for loop

let rangeforL = [];

for (let i = 0; i < 100; i++) {
  rangeforL.push(i);
}
console.log(...rangeforL);

//Fill map

let rangeFillMap = Array(100)
  .fill()
  .map((_, i) => i);

console.log(typeof rangeFillMap, ...rangeFillMap);

let underArray = Array(50);
console.log(underArray);
