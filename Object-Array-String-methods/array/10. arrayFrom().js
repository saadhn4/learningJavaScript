//array.from()

//this method creates a new array instance from an array - line

//it breaks down every element into characters to make an array

let a = "Hello";
let check = Array.from(a); //here Array is written, theres no array. we are converting a variable into array
console.log(check); // ['H,'e','l','l','o']

//this only works with string
//does not work with number , bool , null
