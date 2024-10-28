//1. trim()
//2. touppercase()
//3. tolowercase()
//4. slice()

//1.

let firstName= "  Saad  ";
console.log(firstName.length) //here itll give me the output of 8 since there's spaces

//to use the trim method, i must update the firstName variable

firstName= firstName.trim()
console.log(firstName) //here itll show me my name without spaces
console.log(firstName.length) //here the output will be 4 ; since the spaces are removed

//2.

let secondName= "Hussain";

//now update the variable

secondName= secondName.toUpperCase()
console.log(secondName)

//3.

let surname= "Qureshi";

//updating the variable

surname= surname.toLowerCase()
console.log(surname)

//4.

let newName= "Harshit";
newName= newName.slice(0,4) //here the output will show me hars, eventho h is on the 4th index LAST INDEX IS NEVER INCLUDED. so if i were to print harsh it would be (0,5) 
console.log(newName)

//lets try another example

let fullName= "Saad Hussain";
//now i want to print just Saad WITHOUT any unnecessary space
fullName= fullName.slice(0,4)
console.log(fullName)



