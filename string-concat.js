//concatenate 2 strings, we use + symbol

let str1= "Saad";
let str2= " Hussain"; //i added a space between H so in my output there will be space after Saad
let fullName= str1 + str2; //storing the output in a variable called fullName
console.log(fullName)

//concatenating strings with numbers and then converting them to number

let age1="100"; //since i added quotes, yk its string
let age2="50";
totalAge= age1 + age2;
console.log(totalAge)//it should show me 10050

//but what if i want to add them as just numbers ; so lets consider 2 other numbers

let num1= "1"
let num2= "2";
newNum= +num1 + +num2; //ill simply add + before the variables ; refer string-conversion.js
console.log(newNum) //so my output is 3
//i can even check if this 3 is now number or string
console.log(typeof newNum) //output is shown as number