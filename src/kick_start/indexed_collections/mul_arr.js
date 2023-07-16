/**
 * Explore Multi dimenstional Array
 */
console.log(`Welcome Mul Array`);

let mArrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];
for (let mArray of mArrays) {
  mArray.forEach((e) => {
    console.log(e);
  });
}
console.log(`===========================================================`);
console.log(typeof mArrays);
console.log(mArrays);
console.log(`===========================================================`);
