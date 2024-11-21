//for of and for in loop

//these loops are both used for iterating, but have different purposes and work differently with arrays and objects

//understanding when and how to use each is crucial for effective iteration

//1. for of (arrays and strings)

//purpose : It iterates over arrays and strings NOT objects.

const array = [1, 2, 3, 4, 2];

for (const i of array) {
  //const or let here (line 13) is MUST ; because it will take var by default. (i guess?)
  console.log(i);
}

console.log("--------------------");

const str = "hello";

for (const i of str) {
  console.log(i); //it prints hello line by line
}

console.log("--------------------");

//another 2 examples

let fruits = ["Apple", "Mango", "Orange", "Cherry", "Banana"];
for (let i of fruits) {
  console.log(i);
}

console.log("--------------------");

let string = "Hello, Saad!";
for (let i of string) {
  console.log(i);
}

console.log("--------------------");

//2. for in (only objects)

let obj = {
  fname: "Saad",
  lname: "Hussain",
  age: 20,
};

for (let i in obj) {
  console.log(i); //prints the keys of the object
}

//how do u print the values with it?

for (let i in obj) {
  console.log(i, obj[i]); //comma object name[variable used];
}

console.log("--------------------");

//another example

let google = {
  emailId: "abc@example.com",
  pass: "*****",
};

for (let i in google) {
  console.log(i, google[i]);
}
