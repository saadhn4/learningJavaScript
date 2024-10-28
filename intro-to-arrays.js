//an array is a ordered collection of elements; it can store elements of any datatype even all at once.

let fruits=["apple","banana","mango"];
console.log(fruits);
console.log(fruits[0]); //should show apple
let numbers=[1,2,3]
console.log(numbers)
console.log(numbers[0]); //shows 1
let mix=[1,2,"Saad","Sameer",null,undefined];
console.log(mix)

//updating an array (they are mutable unlike strings)

let names=["Saad","Raihaan","Sheza"];
console.log(names);
names[1]="Ayaan";
console.log(names); //array will change to saad ayaan sheza

//reference type arrays typeof will be object
console.log(typeof fruits);
//How to check if its an array?
console.log(Array.isArray(fruits)); //output will be true
