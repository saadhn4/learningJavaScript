//forEach()

//it is done to display the elements along with their index (?)

//it calls a function for each element in an array

//forEach method is not executed for empty elements

//always remember that it doesnt return anything if you try to get the value it will be undefined

let arr = ["hello", "hi", "I am Saad"];

arr.forEach((x, y) => {
  console.log(x, y);
});

//x returns the array elements
//y returns their index

//performance.now()

//it checks how long it takes to display the output

let start = performance.now();

let sameArray = ["hello", "hi", "I am Saad"];

arr.forEach((x, y) => {
  console.log(x, y);
});

let end = performance.now();

let total = end - start;

console.log(total);
