/**
 * for of Loops with Objects & Array
 */

// Loop Over Array
let arrayLoops = ["Hello", "World", "Worker", "Pradeep"];

for (let element of arrayLoops) {
  console.log(element, arrayLoops[element]);
}

//Explre Object

let objectLoops = {
  101: "First",
  102: "Second",
};

console.log(objectLoops);

for (let [elementKey, elementValue] of Object.entries(objectLoops)) {
  console.log(elementKey, elementValue);
}
