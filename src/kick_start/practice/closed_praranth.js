/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const open = ["{", "[", "("];
  const close = ["}", "]", ")"];

  for (let i = 0; i < s.length - 1; i++) {
    if (open.includes(s.charAt(i))) {
      //   console.log(`True`);
    }
    console.log(i, s.charCodeAt(i), open.includes(s.charAt(i)));
  }
  return false;
};

console.log(isValid(")(){}"));
