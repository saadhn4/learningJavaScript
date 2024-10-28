//Boolean operator returns only 2 values, either true or false. we use >,<,>= etc.

let num1= 4;
let num2=5;
console.log(num1>num2) //output will be false

// == vs ===
//== checks if numbers are equal or same ; it only checks value not datatype

let n1="5";
let n2=5;
console.log(n1==n2) //itll return true as == doesnt check datatype
//lets try with ===
console.log(n1===n2)//it checks the value and datatype, so itll return false

//!= vs !==
//lets consider num1 and num2 as our variables
console.log(num1 != num2) //itll return true
//but what if one is a string and other number?
console.log(n1 != n2) //!= is like ==, it doesnt check datatype only value ; so output will be false as it IS equal.
console.log(n1 !== n2) //this will check datatype. since they are of diff datatype it will be true