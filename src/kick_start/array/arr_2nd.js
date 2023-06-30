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

result = finIn.indexOf("One", 0); // Search for left -> right
result = finIn.lastIndexOf("One", -1); // Search Right -> Left

// find(()=>{}) find Element & return if not match the function then Return "undefind"
// Find "One"

result = finIn.find((ele) => {
  return ele === "One";
  //   return ele === "O_n_e"; // Not matched & return "undefind" only
});

// firstIndex(()=>{}) return index if function call Satisfied otherwise return "-1"
result = finIn.findIndex((ele) => {
  return ele === "log";
});

// array.includes('arg') return true if 'arg' available in the <array>

result = finIn.includes("log");

// array.entries() return array iterator Object with keys/values pairs
result = finIn.entries();
for (let [key, val] of result) {
  console.log(key, val);
}
// arg.every(()=> {retrun true})

result = finIn.every((ele) => {
  return null;
});

// Some() Atleat one Of Element Match

console.log([...finIn]);
result = finIn.some((ele) => {
  console.log(ele);
  return ele === "log";
});
console.log(finIn);
result = finIn.fill("A");
console.log(finIn);
console.log(`================================================================`);
console.log(`bikes: ${[...ele]}`);
console.log(`Result:`, result);
console.log(`================================================================`);
