//Operators

/*

In JavaScript an operator is a special type of symbol used to perform operations on operands (values and variables)

Example: 2+3=5 ; 2 and 3 are operands ; + is the operator

*/

//Types of JavaScript Operators

/*

1. Assignment operator
2. Arithmetic operator
3. String operator
4. Bitwise operator
5. Logical operator
6. Other Operator 
7.Comparison Operator 

*/

//Assignment Operator

/*

{add the table in back of notes}
The assignment operator (=) is used in programming to assign a value to a variable.

*/

let x=10;
console.log(x);
x+=5;
console.log(x); //SO now were also updating x's value also : x is now 15
x-=3;
console.log(x); //15-3 ; : x is now 12
x*=2;
console.log(x); //24
x/=4;
console.log(x); //6
x%=2;
console.log(x); //Remainder itll print ; which is 0

//Arithmetic Operators

console.log (5+2); //7
console.log (7-2); //5
console.log (3*2); //6
console.log(6/2); //3
console.log(5%2); //1
console.log(2**3); //8

//Increment ; it will increase your value by 1 ; ine jab ka jab +1 kardeta

//Pre Increment : ++y

let y=2;
console.log(++y,", pre-increment changes the value rapidly with +1");

//Post increment; it will also increase your value by 1 ; but it will show from next time its used
//change to kardeta ine value, lekin uske next wale line mai batata
//lets demonstrate post increament with a program

let a=10;
console.log(a++); //ye line mai ine direct 11 execute nai karta ; 10 hi batata
console.log(a,", post increment changes the value in the next line or statement"); //ab ya pe 11 batata

//Lets try both pre-decrement and post-decrement

//pre-decrement
let b=10;
console.log (--b); //output will be 9 ; change is applied immediately
console.log(b); //9 only

//post-decrement

let c=20;
console.log (c--); //output will be 20 ; change is not applied in this line
console.log(c); //19 will be output ; change is applied in this line

//Comparison operators
//These operators compare two values and return a boolean (true or false)

console.log(5=="5"); //only checks value ; so true
console.log(5==="5"); //checks value AND datatype ; so false
console.log(5!="5"); //checks ONLY value; so false ; they ARE equal
console.log(5!=="5");//checks value AND datatype ; both arent equal cuz diff datatype; so true
console.log(5>2); //true
console.log(5<2); //false
console.log(5>=5); //greater than OR equal to; in "or" one of them needs to be true; so TRUE
console.log(5<=5);// TRUE

//Logical operators
//Used to determine logic between variables or values

//And operator Truth table ; both the statements need to be true, otherwise it'll print false.

/*

True && True = True ; 0&&0= 0;
True && False = False ; 0&&1=1;
False && True = False ; 1&&0=0;
False & False = False 1&&1=1;

*/

let t=true;
let f=false;

console.log(t&&t); //true
console.log(t&&f);//false
console.log(f&&t);//false
console.log(f&&f);//false

//Or operator truth table ; even if one of the stms is true, it will execute true.

/*

True || True = True;
True || False = True;
False || True = True;
False || False = False; 

*/

console.log(t||t); //true
console.log(t||f); //true
console.log(f||t); //true
console.log(f||f); //false

//In not operator ; 'abcd' mai agar true hai to !abcd usku false banadeta ; false hai to true banadeta
let abcd= false;
console.log(!abcd) //true ; so basically itll invert the statement

//Bitwise operator (here '&','|','^'--not double) NOTE: 0 false ; 1 true
//Note for XOR- 2 same digits output will be zero; if even 1 different- itll be 1.

/*

let a=5;
let b=1;
for bitwise first well find both their binary numbers ; then using truth table of &,|,xor on both the digits,
well obtain another binary number
Now we convert this to decomal
example in notebook.

*/

let n1=5;
let n2=1;
console.log(n1&n2); //1
console.log(n1|n2); //5
console.log(n1^n2); //4

//Other operators
//1. terenary
//2. typeof

//Terenary operator provides a shorthand way to write an if-else condition (boht dum hai ye)

let examMarks=35; //ye apan change kare to pass aur fail bhi change hota
let result= examMarks>=55 ? "pass" : "fail"; //we are storing this in a variable to check condition
console.log(result);

let age=25;
let checkAge= age>=18 ? "eligible to vote" : "not eligible"
console.log(checkAge) //eligible to vote

//typeof 

console.log(typeof "hello") //string
console.log(typeof 5); //number
console.log(typeof true); //boolean
console.log(typeof {});//object
console.log(typeof []);//object it shows, because both array and objects are non-primitive
console.log(typeof null);//object it shows, because this is a bug in JavaScript
console.log(typeof undefined);//undefined

//String operators

//+ operator to concatenate (join) two or more strings

let fname="Saad";
let lname="Hussain";
console.log(fname + " " + lname); //Saad Hussain


