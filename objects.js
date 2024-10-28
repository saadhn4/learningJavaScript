//objects in js are of reference type , like arrays ; we use const and {}
//arrays are good but not sufficient for real world data
//objects store key value pairs
//objects dont have index

//creating an object

const person= {name: "Saad", age:20};
console.log(person);

//accessing data from objects
console.log(person.name);
//alt way
console.log(person["name"]); //make sure u write name in string
console.log(person.age);

//another example
const desc={
  name:"Saad",
  age:20,
  hobbies:["sleeping","gym"]
} //i can put name age hobbies also in quotes ; wont give me error
console.log(desc);
console.log(desc.hobbies); //printing the array ; we can now perform functions on it if we want

//adding a key value pair once the object
desc.gender="male";
//alt way
desc["gender"]="male";
console.log(desc);