console.log("Welcome to JS-Console");
/*
const clickme = document.querySelector(".btn");

console.log(clickme);

clickme.addEventListener("mouseover", () => {
  let name = "Pradeep";
  console.log(name);
});

*/

// setTimeout(() => {
//   console.log("hello Set Time Out");
// }, 2000);

// const promise = new Promise((resolve, reject) => {
//   if (true) {
//     resolve("Promise is Resolved Successfully");
//   } else {
//     reject("Promise got rejected");
//   }
// });

// console.log(promise);

// function callback() {
//   console.log("call back");
// }

// function print(callback) {
//   console.log("before call back");
//   callback();
//   console.log("After call back");
// }

// print(callback);

// const message = function () {
//   console.log("This is Call back message");
// };

// setTimeout(message, 3000);

//Create Promise

// const promise = new Promise((resolve, reject) => {
//   if (true) {
//     resolve("Resolved");
//   } else {
//     reject("Rejected");
//   }
// });

// promise
//   .then(() => {
//     console.log("Resolved");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// let users = [
//   { firstName: "Susan", lastName: "Steward", age: 14, hobby: "Singing" },
//   { firstName: "Daniel", lastName: "Longbottom", age: 16, hobby: "Football" },
//   { firstName: "Jacob", lastName: "Black", age: 15, hobby: "Singing" },
// ];

// let extractData = users.map(($dataElement) => {
//   return $dataElement;
// });

// console.log(extractData);

// let users = [
//   { firstName: "Susan", age: 14 },
//   { firstName: "Daniel", age: 16 },
//   { firstName: "Bruno", age: 56 },
//   { firstName: "Jacob", age: 15 },
//   { firstName: "Sam", age: 64 },
//   { firstName: "Dave", age: 56 },
//   { firstName: "Neils", age: 65 },
// ];

// let matchedData = users.filter((data) => {
//   return data.age > 50;
// });

// console.log(matchedData);
// let users = [
//   { firstName: "Susan", age: 14 },
//   { firstName: "Daniel", age: 16 },
//   { firstName: "Bruno", age: 56 },
//   { firstName: "Jacob", age: 15 },
//   { firstName: "Sam", age: 64 },
//   { firstName: "Dave", age: 56 },
//   { firstName: "Neils", age: 65 },
// ];

// let [{ firstName, age }, Sam, Dave, Neils, ...others] = users;

// console.log(Sam, Dave, Neils, others);

// console.log(firstName, age);

fetch("https://pradeepkumar.tk")
  .then((response) => {
    response.json();
  })
  .then((data) => {
    console.log(data, "hello");
  });
