/**
 * for in Loops with Objects & Array
 */

// Loop Over Array
let arrayLoops = ["Hello", "World", "Worker", "Pradeep"];

for (let element in arrayLoops) {
  console.log(element, arrayLoops[element]);
}

//Explre Object

let objectLoops = {
  101: "First",
  102: "Second",
};

console.log(objectLoops);

for (let element in objectLoops) {
  console.log(element, objectLoops[element]);
}
