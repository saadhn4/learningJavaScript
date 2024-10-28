//when you create a variable but dont assign a value to it, then its undefined.
let firstName;
console.log(typeof firstName) //-> undefined
//for 'const' we have to assign a value or else well get error

//null
let variable=null;
console.log(typeof variable) //output is object, this is some bug in js

//BigInt
console.log(Number.MAX_SAFE_INTEGER) //output is 9007199254740991, this is the biggest number we can store in js
//so imagine you wanna use a bigger number than that idk y u would but lets see lol
let mynum= BigInt(123456789876543345678); //i have to add BigInt for this to work and add the num in brackets, or just add 'n' at the end
console.log(mynum) //my output is 123456789876543345678n
//adding 2 BigInt numbers
let num1= BigInt(12);
let num2=24n;
console.log(num1 + num2) //output is 36n
//what happens if i add a normal number and a BigInt number
// let number1= 12;
// let number2=12n;
// console.log(number1 + number2) U WILL GET ERRORRRR IT WONT WORK

