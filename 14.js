//Control flow statements

/*

JS control flow statements help you manage the sequence in which code executes.
They include conditional statements, loops and exception handling.

*/

//1. Conditional statements
// They allow you to execute code based on specific conditions.



//There are 3 types of statements
//if
//if else
//if else if else
//nested if else

//if statement

let x=10;
if(x>=20){
  console.log ("X is greater than 20");
} //statement is false ; so print stm wont execute

//if else statement
//Here, if statement executes first condition if condition is true ; otherwise itll execute second condition
let age = 15;
if(age == 15){
  console.log("Yes this is true");
}else{
  console.log("False");
}

//You can use terenary operator to do this

let check= age == 17 ? "Yes" : "No";
console.log(check);

let marksGot = 55;
let result= marksGot <=35 ? "Pass" : "Fail"; //55 is less than 35, THis statement is false. So it will print fail aka the other condition

console.log(result);

//if else if else statement

let mymarks= 65;
if (mymarks>=90){
  console.log("A grade");
} else if(mymarks >= 80){
  console.log("B grade");
} else if(mymarks >= 70){
  console.log ("C grade");
} else if(mymarks <= 35 ){
  console.log("Suspended");
}else{
  console.log("Fail");
} //check all the statements and compare. here none of them apply so it goes to the else statement which is fail

//another example

let myAge = 20;
if (myAge < 13) {
  console.log("Child");
}
else if( myAge < 18) {
  console.log("Teeenager");
}
else if ( myAge < 65 ){
  console.log ("Adult");
}
else {
  console.log ("Senior citizen")
} //Adult

//another example

let color = "green";
if(color == "green"){
  console.log('Go');
} else if (color == "yellow"){
  console.log ("get ready to stop");
} else if (color == "red") {
  console.log("STOP!");
} else {
  console.log ("invalid color");
}

//nested if else statement
//if statement INSIDE an if statement

let theAge = 20;
if(theAge >= 18){
  console.log("You are adult");
  if (theAge >= 21){
    console.log("You are eligible for this job");
  } else {
    console.log("You are not eligible");
  }
} else {
  console.log ( "You are minor");
}

//another example

let score=45;
if(score > 60 ) {
  console.log("Passed");
  if (score >= 90){
    console.log("Honors");
  } else {
    console.log ("Not honors still passed");
  }
} else {
  console.log ("FAILLLLL");
}


