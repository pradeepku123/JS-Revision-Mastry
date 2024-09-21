console.log(`Reverse String with Same Space`);
let givenString = "Hard work always pays back";

let outputString = "";

console.log(givenString.length);
for (let i = 0; i < givenString.length; i++) {
  if (givenString[i] !== " ") {
    outputString += givenString[givenString.length - i - 1];
  } else {
    outputString += " ";
  }
}
console.log(givenString);
console.log(outputString);
