/*

setTimeout
Purpose: Exceutes a function after a specified delay (in milliseconds).

*/

//syntax: setTimeout(function, delay, param1, param2, ...);

//1 second = 1000 milliseconds

function hello() {
  console.log("Hello");
}
setTimeout(hello, 5000); //this executes my function after a delay of 5 seconds

//another way of doing this

setTimeout(() => {
  console.log("Hello");
}, 5000);

console.log("---------");

//**actual usage of setTimeout():**

function delayMessage(name, time) {
  setTimeout(() => {
    console.log(
      `my name is ${name} and this message is being displayed after ${time} seconds`
    );
  }, time * 1000);
}
delayMessage("Saad", 4); //this function gets called after 4 seconds

console.log("---------");
