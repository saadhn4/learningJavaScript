//Objects vs Arrays

/*

An object is a collection of key-value pairs. THese keys are known as proprties and the value can be of any datatype 
like strings, numbers, arrays 

*/

let details= {
  name: "Saad Hussain",
  age: 20,
  email: "saadcfi4@gmail.com",
  year: "2022-2025"
};

//How to access properties in objects
console.log (details);
console.log(details.name);
console.log(details.name,details.age);
console.log(details["email"]); //alt way of accessing instead of using . {. method is preferred}

//How to add a property

details.gender="Female";
details.gender="Male"; //update the value
console.log (details);

//Another example;
let myAmazonUser= {
  fullName: "Saad Hussain",
  age: 20,
  gender: "male",
  isActive: true,
  address: "Hyderabad",
  totalProducts: ["iPhone","Samsung"],
};
console.log(myAmazonUser);
myAmazonUser.age=21;
console.log(myAmazonUser);
delete myAmazonUser.address; //delete a key value pair
console.log(myAmazonUser);

//When to use objects?
/*

1. When you need to group related data and functions logically.
2. When each element has a name or identifier

*/


/*

An array is an ordered list of values. These values can be of any type, and an array can store multiple types at once.

*/

//Creating an array

let numbers=[1,2,3,4,5];
let mixedArray=[1,"Hello",true,{id: 1}, [10,20]];
console.log(numbers);
console.log(mixedArray);

//Accessing array elements
console.log(numbers[0]); //array starts from 0 ; so this will print 1
console.log(mixedArray[3]); //this will print the object/dictionary
console.log(mixedArray[3].id); //this will print the value of id
console.log(mixedArray[4][0]); //this will print 10

//Modifying elements
numbers[2]=10; //array will change to [1,2,10,4,5]
console.log(numbers)
mixedArray[4][0]=30; //this will change the array inside the array to [30,20]
mixedArray[4].push(50); //this will this will change the array inside the array to [30,20,50]
console.log(mixedArray);

//Adding elements in an array
//lets take a new array

let cfistudents= ["Saad","Omer","Ismail","Rehman","Muzammil","Kareem"];
console.log(cfistudents);
cfistudents.push("Samid"); //adds element at the end of the array
cfistudents.unshift("Naasir"); //adds element at the start of the array
console.log(cfistudents);

//Removing elements in an array

cfistudents.pop(); //removes element at the end of the array ; so Saamid will go
console.log(cfistudents);
cfistudents.shift(); //removes element at the start of the array ; so Naasir will go
console.log(cfistudents);
