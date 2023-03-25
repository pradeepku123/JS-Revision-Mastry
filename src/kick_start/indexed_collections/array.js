/**
 * Here Explore idexed Collections like Array ,TypedArray
 */

console.log(`Welcome to Indexed Collection JS`);

/**
 * Creating a Array with diffrenrt Method
 */

const arr1 = new Array(1, 2, 3);
// const arr2 = new Array(2.6); Range Error
const arr2 = new Array(2);

console.log(arr1, arr1.length);
console.log(arr2, arr2.length);

/**
 * For Single Element you Can Create Array wth Static Method Array.of('Single Element String')
 */

const arr3 = Array.of("Single Element");
console.log(arr3, arr3.length);
