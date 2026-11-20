// Execute five Promises simultaneously using Promise.all() and calculate execution result.

const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);
const p4 = Promise.resolve(40);
const p5 = Promise.resolve(50);

Promise.all([p1, p2, p3, p4, p5])
  .then((results) => {
    let sum = 0;
   for (let value of results) {
      sum += value;
    }
console.log("Results:", results);
console.log("Total:", sum);
})

  .catch((error) => {
    console.log(error);
  });