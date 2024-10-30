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


