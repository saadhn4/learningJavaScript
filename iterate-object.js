const person={
  name:"Saad",
  age:20,
  hobbies:["sleeping","gym"]
}
console.log(person)

//to iterate over an object, we use for in loop and Object.keys
//remember for in loop prints the index of the items ; so here we can use it to print key
for(let key in person){
  console.log(key) //itll give me name age hobbies in line
}

//how do i print the values?
for (let key in person){
  console.log(person[key]); //i have doubt in this
}

//print key and value together

for(let key in person){
  console.log(key,person[key]);
}

//Object.keys
console.log(Object.keys(person)) //itll show me keys in an array format
console.log(typeof Object.keys(person)) //it prints object so array
