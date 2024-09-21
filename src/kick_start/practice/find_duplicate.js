console.log("Find Duplicate CharArray Character");
let givenArray = ["2", "1", "3", "5", "9", "10", "11", "3", "3", "5", "9"];
let outputString = "";
let mySet = new Set(givenArray);
console.log(mySet);

for (let i = 0; i < givenArray.length; i++) {
  for (let j = 0; j < givenArray.length; j++) {
    if (givenArray[i] === givenArray[j] && i !== j) {
      if (!outputString.includes(givenArray[i])) outputString += givenArray[i];
    }
  }
}
console.log(outputString);
