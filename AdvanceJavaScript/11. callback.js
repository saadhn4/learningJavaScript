//Callback

//NOTE - A function calling the itself inside it is called recursion.
//Whereas, A function calling ANOTHER function via parameter is called callback.
//Bunch of callbacks, becomes callback hell.

/*

In JS, a callback is a function that is passed as an argument to another function 
and is executed after some operation is completed.

Callsbacks are a key concept in JS

Often used for handling asynchronus operations like API calls, file reading, or event handling.

synchronus - one by one
asynchronus - all at once

*/

//Asynchronus code (inlog order follow nai karte) (delayed tasks) (to bring these in order we use async/await)

/*

1. setTimeout and setInterval
2. HTTP requests
3. Promises
4. File system

*/

//example program:

function sayHello(callback) {
  console.log("Hello");
  callback();
}
function fname(callback) {
  console.log("My name is Saad");
  callback();
}
function age() {
  console.log("My age is 20");
}

sayHello(() => {
  fname(() => {
    age();
  });
}); //this entire process of calling multiple functions inside a function is called callback hell

//another

let name1 = (fname, callback) => {
  console.log(`Hello ${fname}`);
  callback();
};

let name2 = (fname, callback) => {
  console.log(`Hello ${fname}`);
  callback();
};

let name3 = (fname, callback) => {
  console.log(`Hello ${fname}`);
  callback();
};

let name4 = (fname) => {
  console.log(`Hello ${fname}`);
};

name1("Suhail", () => {
  name2("Naasir", () => {
    name3("Saad", () => {
      name4("Rahman");
    });
  });
});
