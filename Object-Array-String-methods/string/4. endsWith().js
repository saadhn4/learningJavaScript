//endsWith()

//checks if a string ends with a specified string or characters

let str = "Hello World";

console.log(str.endsWith("World")); //true

console.log(str.endsWith("d")); //true

//Question: Will str.endsWith("Hello") return true or false for the string "Hello World"?

console.log(str.endsWith("Hello")); //false
