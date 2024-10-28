//let keyword
//this is also used to declare a variable ; much like var

let firstName="Sameer";
console.log(firstName)

//we will mostly be using let instead of var ; will explain why in upcoming programs

//lets say i use var to declare a variable and update it
var secondName = "Mohiuddin"
var secondName = "Siddiqui"
console.log(secondName)

//here if i were to use let in the 10th and 11th line, it would not work. This is a difference bw var and let
//so how do i update the variables value using let?

let thirdName = "Mohammed";
thirdName = "Saif"; //unlike var, here im not adding the let keyword. just directly variable name.
console.log(thirdName)