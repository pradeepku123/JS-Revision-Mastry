/**
 * Closures Explorer
 */
console.log(`Welcome to the closurer`);

const pet = function (name) {
  const getName = function () {
    return name;
  };
  return getName;
};

const innerFunc = pet(`InnerPetName`);

console.log(`------------------`);

console.log(innerFunc());
