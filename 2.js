//variables and constants in JavaScript

/*
In programming

variable is a container for storing data values
variable is a name given to a memory location
We can use the info stored in a variable to perform a task
We can use the same variable name to refer to different values
We can change the data of information later

Example:

var num = 5;

num is a variable

You declare variables using var,let,const

These 3 are keywords in JS

*/

var names= "Saad";
console.log(names);

let name1= "Goat";
console.log(name1)

const name2= "Dannah";
console.log(name2)

var box1= 5;
var box2= 10;
console.log(box1,box2);

var firstName= "Saad Hussain";
console.log(firstName)

//JavaScript is case sensitive
//hello is not equal to Hello

/*JS follows order from top to bottom
in var if i give home= "room1", then in the next line do home="room2";
itll update and overwrite the value in my variable and print room2
*/

var home= "room1";
home="room2";
console.log(home);

//By default if you didnt declare var, it will take global variable as var.

//Rules for naming variables

//1. Variable names can only contain letters, numbers, and underscores.

var a="Apple";
var _a="Air";
var $a = "Aeroplane";
// var 7a="Hello"; this will give error
console.log(a,_a,$a);

//2. variable names are case sensitive
var hello="hi";
var Hello="bye";
console.log(hello,Hello);

/*

camelCase - used most in JS
snake_case
PascalCase

*/

//3. Variable names should not be JS keywords (like var,let,const)
/*
var var="Helloooo";
var let="Hello2";
var const="Hello3";
console.log(var)

You will get this error: SyntaxError: Unexpected token 'var'
*/  

//4. Variable names should not start with a number

// var 7a="Hello"; this will give error

//5. Use meaningful names in variables.

//6. Use camelCase for naming variables.

//firstPerson="Saad";
//firstName="Saad";
//firstPerson="Saad";

//Valid variable names

var _saad="Hello world";
var sa_ad="Hello world";
var $saad="Hello world";
var sa$ad="Hello world";
var saad="Hello world";



