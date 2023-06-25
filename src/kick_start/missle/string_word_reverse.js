/**
 * Welcome to String word Reverse
 */

console.log(`Welcome to String word Reverse`);

let myWord = `My Name is Pradeep Kumar BEH`;

myWord.split(" ").forEach((val) => {
  console.log([...val].reverse().join(""));
});
