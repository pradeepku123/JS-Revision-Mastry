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

//push() add new element end of Array

result = bikes.push("NewBikes"); // Push new element & return length of Array

//shift() move first element & return it.

result = bikes.shift(); // return Shifted Array

//unshfit() move first Element & return length

result = bikes.unshift("NewBikesUnshift"); // return its length
// delete array[index];
// delete bikes[1]; // Deleter & set Holos to Array

// Concat  Join two Array add Multiple Array to Single Array Without modifing Original Array
result = bikes.concat(cbikes, [1, 2, 3], [2, 3, 4]);

// sort();
cbikes = ["weight", "Arrival", "zone", "inter"];
result = cbikes.sort(); // By default sort() Asending Order
console.log(result.join());
// Sort() Descending Order
result = cbikes.sort((a, b) => {
  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  } else {
    return 0;
  }
});

/**
 * Array Stack Printed
 */
console.log(`----------------------------------------------------------------`);
console.log(`Array {Bikes} size: ${bikes.length}`);
console.log(`Array {CBikes} elements: | ${cbikes.join(" | ")} |`);
console.log(`Array {Bikes} elements: | ${bikes.join(" | ")} |`);
console.log(`Result: ${result}`);

console.log(`================================================================`);
