//Functions
/*
Functions is a block of code which performs specific task.

There are 2 types of functions -
1. Built-in functions
2. User defined functions

1. Built in functions:

a. String functions
b. Array functions
c. Math functiions
d. Date functions
e. Number functions
f. JSON functions
g. Console functions

2. User-defined functions:

//Declaring a function:

//Syntax-

function nameOfFunction(){
  code
};

//Calling a function:
nameofFunction()

//It will look like this in use:

function box(){
  code
};
box()

Important points of functions:

1. Function is declared using function keyword.
2. Always use camelCase for declaring function name.
3. The body of function is written in code block{}.
4. functions are reusable.
5. Functions are the fundamental block of JS.
6. Functions are a group of code designed to perform a specific task.
7. JS functions can be called anywhere in your program

*/

//example

//declaring the function
function sayHello() {
  console.log("Hello");
}
//calling the function
sayHello();

//Types of user defined functions:

/*

1. Simple functions
2. Function parameters
3. Function with return
4. Function expression
5. Arrow function

*/

//1. Simple function

// A function that performs actions and doesnt return a value

function greet() {
  console.log("Hello, world!");
}
greet();

console.log("------------------");

//2. a. Functions parameter

function sayHi(firstName) {
  console.log(`Hi, ${firstName}!`);
}
sayHi("Saad");

console.log("------------------");

//2. b. Function with parameters WITHOUT return
function sum2Nums(n1, n2) {
  console.log(n1 + n2);
}
sum2Nums(1, 5);

console.log("------------------");

function mul2Nums(n1, n2) {
  console.log(n1 * n2);
}
mul2Nums(1, 24);

console.log("------------------");

function minus2Nums(n1, n2) {
  console.log(n1 - n2);
}
minus2Nums(7, 2);

console.log("------------------");

//example for with baptics and without

function greet(name) {
  console.log("Hi, " + name + "!");
  console.log(`Hi, ${name}!`);
}
greet("Omer");

console.log("------------------");

//here, name is a parameter so we can pass any name when we call greet

//printing 5's multiplication table in functions

function table(num) {
  let i = 1;
  for (i; i <= 10; i++) {
    console.log(`${num} x ${i}= ${num * i}`);
  }
}
table(5);

console.log("------------------");

//lets try printing 6

function tableOf(num) {
  let i = 1;
  for (i; i <= 10; i++) {
    console.log(`${num} x ${i}= ${num * i}`);
  }
}
tableOf(6);

console.log("------------------");

//lb area of rectangle

function areaOfRect(l, b) {
  console.log(l * b);
}
areaOfRect(5, 2);

console.log("------------------");

//area of triangle

function areaOfTriangle(b, h) {
  console.log(0.5 * b * h);
}
areaOfTriangle(5, 7, 2);

console.log("------------------");

//area of square

function areaOfSquare(s) {
  console.log(`Area of square is ${s * s}`);
}
areaOfSquare(4);

console.log("------------------");

//Funtion with return

function addNumbers(a, b) {
  let total = a + b;
  console.log(total);
}
let finalSum = addNumbers(5, 6);
console.log(finalSum); //11 undefined

console.log("------------------");

function sum(num1, num2) {
  return num1 + num2;
}
let totalSum = sum(5, 6);
console.log(totalSum);

console.log("------------------");

//note:
/*

1. if you need to get a value back from the function, use return. this lets the function provide a specific result
that can be saved or used.

2. if you just want the function to do something and dont need a result, dont use return

*/

//WITHOUT RETURN

function addWithLog(a, b) {
  console.log(a + b);
}
addWithLog(4, 6); //10

let doubleResult;
doubleResult = addWithLog(4, 6) * 2;
console.log(doubleResult); //this doesnt work because in line 209 we used console.log we didnt store any value we just printed the result. It will give me 10 NaN

console.log("------------------");

// WITH RETURN
//so the right way to do this would Be

function addTwoNumbers(c, d) {
  return c + d;
}
let sumCheckk = addTwoNumbers(4, 6);
console.log(sumCheckk); //10

console.log(sumCheckk * 2); //20

console.log("------------------");

//So, to actually make code reusable ; we NEED to use return.

//Function Expression

/*

In JS, functions can be defined as expressions

*/

//pehle k aur isme ye difference hai ki function and functionName ki jagah swwitch hojata

//lets compare the 2

//og method

function divtwoNumbers(a, b) {
  return a / b;
}
let division = divtwoNumbers(4, 4);
console.log(division);

//expression method

let divideTwoNumbers = function (numb1, numb2) {
  return numb1 / numb2;
};
let checkDivision = divideTwoNumbers(4, 4);
console.log(checkDivision);

console.log("------------------");

//more functions practice

//find a number squared result

function squaredNumber(num) {
  return num * num;
}
let answer = squaredNumber(8);
console.log(answer);

console.log("------------------");

//print square table

function sqtable() {
  let i = 1;
  for (i; i <= 10; i++) {
    console.log(`${i} x ${i}= ${i * i}`);
  }
}
sqtable();
