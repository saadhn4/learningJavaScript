// function displayMarks(marks, time) {
//   return setTimeout(() => {
//     console.log(`marks are ${marks}`);
//   }, time * 1000);
// }
// displayMarks(95, 2);

// setTimeout(
//   (fname) => {
//     console.log(`Hello, ${fname}`);
//   },
//   2000,
//   "Saad"
// );

// function displayMessage(name) {
//   setTimeout(() => {
//     console.log(`Hello ${name}, How are you?`);
//   }, 2000);
// }
// displayMessage("Saad");

// function displayNumber(number) {
//   setTimeout(() => {
//     console.log(`The number you want to display is ${number}`);
//   }, 2000);
// }
// displayNumber(5);

//setInterval

//I want to print hello 5 times and then stop it

//first ill have to do setInterval

// let stopTimer = setInterval(() => {
//   console.log("Hello");
// }, 1000); // displays hello after 1 second in infinite loop

//now lets stop it after 5 times

//first let me store the setInterval in a variable called stopTimer

// setTimeout(() => {
//   clearInterval(stopTimer);
// }, 6000); //so this prints hello 5 times and then stops at the 6th second.

// let timerStop = setInterval(() => {
//   for (let i = 0; i <= 5; i++) {
//     console.log(i);
//   }
// }, 1000);

// setTimeout(() => {
//   clearInterval(timerStop);
// }, 1000);

//googled what i was trying to do and did this

// function printNumbers() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// printNumbers();

// function displayHello() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// displayHello();
