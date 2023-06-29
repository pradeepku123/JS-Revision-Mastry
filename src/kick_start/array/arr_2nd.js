/**
 * Explore Arrays Methods & Properties
 */

console.log(`welcome to arr_2nd.js`);
let ele = ["TVS", "BAJAP", "HERO", "U&U", "III"];
/**
 * slice()
 * its Sliceout from an array & retrun a new Array
 */
let result = ele.slice(3, -1);

console.log(ele.reverse().join());

result = Array.isArray(ele); // find passed argument was an array or not.
let finIn = ["error", "One", "Seven", "warning", "One", "log", "Math"];

result = finIn.indexOf("One", 0);

console.log(`================================================================`);
console.log(`bikes: ${[...ele]}`);
console.log(`Result:`, result);
console.log(`================================================================`);
