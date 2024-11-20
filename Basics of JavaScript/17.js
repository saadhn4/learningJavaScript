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

//arrow functions

//1. arrow functions were introduced in ES6(2015)
//2. arrow functions allow us to write shorter function syntax

//Before arrow functions

//1.
// function sayHello() {
//   console.log("Hello");
// }
// sayHello();

//2.
// let sayHell0 = function () {
//   console.log("Hello");
// };
// sayHello();

//Arrow function example:

let sayHell0 = () => {
  console.log("Hello");
};
sayHell0();

console.log("------------------");

//*it is pretty similar to function expression except there is no function keyword and a => after the parantheses.*

//lets try doing sum of 2 numbers in arrow
//in arrow, if your curly braces only has 1 line like return a + b; u dont need curly braces or the return keyword
//you can use curly braces tho still

let sumofNumbers = (a, b) => {
  return a + b;
};
console.log(sumofNumbers(7, 2));

console.log("------------------");

//demonstration of what i was talking ab in line 319

let example = (a, b) => a + b;
console.log(example(1, 3));

console.log("------------------");

//Hoisting

/*

Hoisting is a mechanism where variable and function declarations are moved ("or hoisted")
Hoisting only works in a simple function (not function expression and arrow)
to the top of their scope before code execution.
This means, you can use variables and functions before declaring them in the code.
However, note that onlt declarations are hoisted, not initializations or assignment.
In JS, you can call the function even before it is already declared

*/

test(); //instead of calling the function after curly braces, im calling it before. will print hello

function test() {
  console.log("Hello");
}
//now if i still were to declare it after it would still work. will print hello
test();

console.log("------------------");

//NOTE------*With arrow functions and function expression, we cannot use hoisting.*
//this holds true even if we were to declare the function with var.

//lets try doing it in arrow function
// testt();
// let testt = () => {
//   console.log("Heuuuiiuu");
// };
// testt(); //ReferenceError: Cannot access 'testt' before initialization

//Anonymous function

/*

An anonymous function is a function that does not have a name
Its often used when you need a function as a value
Particularly in cases where where you don't need to  reference the function later.

anonymous functions are useful for single-use function or for functions 
passed as argument.

It is declared same as function expression

*/

let sayhello = function () {
  console.log("hello");
};

//IIFE (immediately Invoked function expression
(function () {
  console.log("IIFE executed immediately");
})();

console.log("------------------");

//Recursion

//It is a process in which a function calls itself directly or indirectly in order to solve a problem
//by breaking it down into smaller, similar sub problems.
//This repeated self-calling contunues until it reaches a base case
//which is a condition where no further recursion is needed
//allowing the function to start returning values back up through each call

//in simpler terms
//recursion is when something is defined or done in terms of itself until it reaches a stopping point

//example

// function call(number) {
//   console.log(number);
//   //call(6); it gives me an infinite loop of 6
// }
// call(6);

//now what if i called the 6 inside the code block itself? (check line 412) (dont do this XD)

//example in class:
//using recursion to print 5-0

// function call(num) {
//   if (num <= 0) {
//     //it runs a backwards loop and when it reaches 0 ; the condition is true. so it will execcute the "loop has stopped" statement
//     return console.log(" the loop has stopped");
//   }
//   console.log(num);
//   call(num - 1); //infinite loop of 7 so it goes like 5 4 3 2 1 ; nnow the condition is true ; so loop has stopped prints.
// }
// call(5);

// console.log("------------------");

//ill try again lets print from 100-10

function call(num) {
  if (num <= 9) {
    return console.log("stop that shit"); //value ku stop karne return zaroori hai. to end the if block
  }
  console.log(num);
  call(num - 1); //this runs infinite loop. 100 99 98 ..... 10 ; now 9<=9 is true and the stop stm prints.
}
call(100); //this calls 100

console.log("------------------");

//lets try factorial

function factorial(number) {
  if (number == 0 || number == 1) {
    return 1;
  }
  return number * factorial(number - 1); //line 454's function is being called here and were making changes to it
}
console.log(factorial(5));

console.log("------------------");

//factorial of 2

function fac(num) {
  if (num == 1 || num == 0) {
    return 1;
  }
  return num * fac(num - 1);
}
console.log(fac(2));

console.log("------------------");

//print numbers from 10-8

function print(numbers) {
  if (numbers <= 7) {
    return console.log("Stop");
  }
  console.log(numbers);
  print(numbers - 1);
}
print(10);

console.log("------------------");

//more recursion practice

let num = 1;
function show() {
  if (num >= 6) {
    return console.log("Stop");
  }
  console.log("Hi", num);
  num++;
  show();
}
show();

console.log("------------------");
