/**
 * Explore JS Array Methods & concepts
 */
console.log(`================================================================`);
console.log(`welcome to JS Array`);

// array.toString();

let bikes = ["TVS", "BAJAP", "HERO", "U&U"];
let cbikes = bikes.map((val) => {
  return val;
});
console.log(bikes.toString());

//array.Join(separator) its Join all element by comma or separator string.

console.log(bikes.join()); // By default join all elements with "," else join all elements with "separator"

bikes
  .join()
  .split(",")
  .forEach((val) => {
    console.log([...val].reverse().join(""));
  });

// pop() will remove last element & return & its changes the operateed array

let result = bikes.pop();
result = bikes.pop();
result = bikes.pop();

/**
 * Array Stack Printed
 */
console.log(`----------------------------------------------------------------`);
console.log(`Array {Bikes} size: ${bikes.length}`);
console.log(`Array {CBikes} elements: | ${cbikes.join(" | ")} |`);
console.log(`Array {Bikes} elements: | ${bikes.join(" | ")} |`);
console.log(`Result: | ${result}`);

console.log(`================================================================`);
