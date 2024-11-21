//JSON has 2 methods

/*

Key Methods:

JSON.stringify(object): Converts a JavaScript object into a JSON string
JSON.parse(string): Converts a JSON string into a JavaScript object

*/

let person = {
  fname: "Saad",
  age: 20,
  isAlive: true,
  phone: 123456789,
};

let convert = JSON.stringify(person);
console.log(typeof convert, convert); //it prints string and the object in json format ; which is now called json string

//now lets convert it back to JS object

let parsedObject = JSON.parse(convert); //convert is where our json string is stored

console.log(typeof parsedObject, parsedObject); //object ; prints the JS object
