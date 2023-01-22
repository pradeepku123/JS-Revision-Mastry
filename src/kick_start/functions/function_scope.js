/**
 * Fucntion Scope
 */
console.log(`Functional Scope Concept`);

let glScopeVar = "GlobalScope";

//Print Global Scope Variable
console.log(glScopeVar);

function localScopeFunction() {
  let llScopeVar = "LocalScope";
  console.log(llScopeVar);
}

// call Local Scope function
localScopeFunction();

// ReferenceError: llScopeVar is not defined
console.log(llScopeVar);
