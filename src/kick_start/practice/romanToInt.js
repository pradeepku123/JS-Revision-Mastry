console.log(`Welcome to Roman to Integers`);
/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = function (s) {
  const romanObj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let romanNum = s.split("");
  let total = 0;
  for (let i = 0; i < romanNum.length; i++) {
    console.log("I", i);
    console.log(total, romanObj[romanNum[i]], romanObj[romanNum[i + 1]]);
    if (romanObj[romanNum[i]] < romanObj[romanNum[i + 1]]) {
      total += romanObj[romanNum[i + 1]] - romanObj[romanNum[i]];
      i++;
    } else if (romanObj[romanNum[i]] > romanObj[romanNum[i + 1]]) {
      total += romanObj[romanNum[i]];
    } else {
      total += romanObj[romanNum[i]];
    }
  }
  return total;
};

console.log(romanToInt("DCXXI"));
