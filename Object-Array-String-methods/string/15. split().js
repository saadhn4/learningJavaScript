//split(separator, limit)

//The split() method splits a string into an array of substrings based on a specified separator.

let str = "Hello world";

console.log(str.split(" ")); //it would print an array with 2 elements ["Hello", "World"]

console.log(str.split("")); //what if i were to give no space?

/*[
  'H', 'e', 'l', 'l',
  'o', ' ', 'w', 'o',
  'r', 'l', 'd'
  ]

  */

//it would print an array with each character as an element

let str2 = "AB";
console.log(str2.split("")); //[ 'A', 'B' ]

console.log(str2.split(" "));
