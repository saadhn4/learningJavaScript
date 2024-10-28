// string indexing 

let firstName= "Harshit";

// each character has an index starting with 0. So H is 0 and A is 1... T is 6.

//now i want to print a character at a specific index, lets say r

console.log(firstName[2]) //r's index is 2

//how to find length of the string

console.log(firstName.length) //output will be 7, here it wont start from 0 ; also spaces are counted if u have any

//lets say i have a long asf string and i want to find out whats the last character of it

console.log(firstName[firstName.length-1]) // this will show me 't' ; if i want second last ill do -2