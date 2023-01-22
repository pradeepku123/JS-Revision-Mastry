/**
 * Defining Function
 * called function Declaration and function statement
 * consist of <function Keyword>
 */
console.log(`Welcome to function`);

/**
 * Funtion Declaration
 */
function displayFunction() {
  console.log(`Function Called`);
}

/**
 * Function Calling
 */
displayFunction();

/**
 * pass Object as a argument
 */
function display(obj) {
  console.log(obj);
}

display({ fn: `Pradeep` });

function myFunc(theObject) {
  console.log(theObject);
}

myFunc({
  make: "Honda",
});
