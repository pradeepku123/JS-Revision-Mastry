/** Explore Balanced Array */
console.log(`Welcome to Balanced Array Solutions`);
let arr = [2, 1, 6, 4];

function findOutBalancedArrayNumber(arrArg) {
  let specialElement = 0;
  arrArg.forEach((ele) => {
    let oddIndex = 0;
    let evenIndex = 0;
    for (let i = 0; i < arrArg.length; i++) {
      if (i % 2 === 0) {
        evenIndex += arrArg[i];
      } else {
        oddIndex += arrArg[i];
      }
    }
    console.log(evenIndex, oddIndex);
  });
  return specialElement;
}

let fBalancedNumber = findOutBalancedArrayNumber(arr);

console.log(fBalancedNumber);
