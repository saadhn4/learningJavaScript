const person={
  "name":"Saad",
  "age":20,
  "my hobbies":["sleeping","gym"]
}
console.log(person)
console.log(person["my hobbies"]); //accessing my hobbies we yse bracket here cuz js doesnt allow spaces 

//what if i want to add a key-value from a pre existing variable itself
//lets first declare the variable
let key="email";
person[key]="abc@example.com";
console.log(person); //now itll add email:'abc@example.com' to the object after my hobbies