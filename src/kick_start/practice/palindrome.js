/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  console.log(x);
  return Number(x.toString().split("").reverse().join("")) === x ? true : false;
};

isPalindrome(121);
isPalindrome(-121);
isPalindrome(1121);
