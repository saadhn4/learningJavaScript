//try catch block

/*

In JS, the try...catch statement is used to handle errors gracefully
code inside the try block is executed
if an error occurs, control jumps to the catch block
this allows you to handle errors without stopping the entire script

*/

//***********It only covers your Reference and Type error. *****************

//Types of errors

//1. Syntax Error
//2. Reference Error
//3. Type Error

//1. Syntax Error:

/*

*Occurs when JS code is syntactically incorrect
Example: Missing braces {}, parantheses (), or misspelled keywords if -> ij
             

*/

//2. Reference Error:

/*

A refernece error in JS occurs when you try to use a variable that hasnt been declared or is out of scope

*/

//3. Type Error:

/*

It occurs when you try to perform an operation on the wrong data type
such as calling a method on a non function or accessing a property on null or undefined

for example; if i were to try to use a string method on a variable that stores a number
this would give me Type Error

*/

//try catch block syntax:

/*

try {
    //code that may throw an error
} catch (error) {
    // code to handle the error
}

*/

//try catch is used to handle the exceptions
//the main code is inside the try block
//if any errors found ; it goes to the catch block
//if no errors in try block; catch block is skipped

try {
  console.log("Hello");
} catch (error) {
  console.log(`The error is ${i}`);
}

console.log("-----------"); //no error so it prints hello

try {
  // let x=5;
  console.log(x);
} catch (error) {
  console.log(`the error in my code is ${error}`); //this will give me the type of error and 1 line ab the error
}

console.log("-----------");

const numerator = 100,
  denominator = "a"; //new way of declaring variables ; keyword variableName, variableName;

try {
  console.log(numerator / denominator); //NaN

  console.log(a); //no variable a exists
} catch (error) {
  console.log("error");
  console.log(`the error is ${error}`);
} finally {
  console.log("hello");
}

console.log("-----------");

try {
  let obj = {
    fname: "Saad",
  };
  obj.name = "Saad";
  console.log(obj);
  console.log(obj.name);
} catch (error) {
  console.log("Error name:", error.name);
  console.log(`The error is ${error}`);
}

console.log("-----------");

function test(pass) {
  try {
    let obj = { name: pass }; //takes pass ; the value ill enter when i call the function [line 114 and 122]
    console.log(obj.name);
  } catch (error) {
    console.log(`the error is ${error}`);
  }
}
test("Saad");

console.log("-----------");

//create a function to calculate area of rectangle inside try catch

function area(l, b) {
  try {
    return l * b;
  } catch (error) {
    console.log(`the error is ${error}`);
  }
}
console.log(area(5, 7));

//Syntax error will show regardless, even if you add a catch block to it ; it wont work.

//finally block:
//code that gets executed in any condition, even if its wrong. here also syntaxError doesnt work
//error rehnde nai rehnde de ; finally will always print
