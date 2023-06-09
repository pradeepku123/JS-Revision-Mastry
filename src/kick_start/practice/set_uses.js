console.log(`Welcome To Set Uses`);
let arrD = [1, 2, 2, 3, 4, 5, 1, 4, 7, 8, 3];
let uniqueArrry = new Array(...new Set(arrD));

console.log(uniqueArrry);

let myVar = "javaj";

console.log([...myVar]);

[...myVar].forEach((val, i) => {
  console.log(
    val,
    i,
    myVar,
    myVar.slice(i + 1, myVar.length),
    myVar.slice(i + 1, myVar.length).includes(val)
  );
  //   console.log(val.includes(myVar.slice(i + 1, myVar.length)));
});
