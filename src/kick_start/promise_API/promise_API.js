/**
 * Welcome to Promise API
 */
console.log(`Welcome to Promise API`);

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Poromise p1");
  }, 9000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Poromise p2");
  }, 5000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Poromise p3");
  }, 8000);
});

const result = await Promise.race([p1, p2, p3])
  .then((e) => {
    console.log(e);
  })
  .catch((e) => {
    console.log("Error");
  });

console.log(`Result:${result}`);
