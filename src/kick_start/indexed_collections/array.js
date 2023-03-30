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

let newA = ["GI", "AS", "CI", "DE", "LG"];
console.log(typeof newA);

newA.forEach((ele) => {
  console.log(`Element ${ele}`);
});
console.log(newA.join("-"));

console.log(newA.push("KT"));
console.log(newA);
console.log(newA.pop());
console.log(newA);
console.log(newA.at(-1));
// Reverse a String
let revString = "MyString".split("").reverse().join("");
console.log(revString);

console.log(newA);
console.log(newA.sort());

console.log(
  newA.sort((a, b) => {
    if (a < b) return 1;
    else if (a > b) return -1;
    else if (a == b) return 0;
  })
);
