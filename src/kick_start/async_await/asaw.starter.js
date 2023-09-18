console.log("Welcome to Async & await");

const p1 = new Promise((resolve, reject) => {
  resolve("This is p1 Promise Object");
});
async function asawFunction() {
  console.log("ASAW Function");
  const promiseValue = await p1;
  console.log(promiseValue);
}

asawFunction();
/*
function handlePromise() {
  console.log("This is handlePromise");
  p1.then((data) => console.log(data));
  console.log("After handlePromise");
}

handlePromise();
*/
