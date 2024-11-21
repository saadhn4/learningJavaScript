//Promises

/*

Promises are a powerful way to handle asynchronus operations.
They represent a value that maybe available now, or in the future, or never.
Promises help manage asynchronus code moe effectively than traditional callbacks, avoiding "callback hell"

How Promises work

A Promise is an object with three possible states:

1. Pending: Operations is ongoing, has not yet completed
2. Fulfilled: Operation completed succesfully, and the promise has a value.
3. Rejected: Operation failed, promise has a reason or error.

*/

//even odd using promises to understand syntax
//resolve - then ; reject - catch

function checkEvenOdd(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 == 0) {
      resolve("Even");
    } else {
      reject("Odd");
    }
  });
}

checkEvenOdd(2)
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
