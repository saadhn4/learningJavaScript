//sort()

//DOUBT

//arranges the array in alphabetical order

let fruits = ["banana", "apple", "cherry", "date"];

let result = fruits.sort();
console.log(result);

//numbers

let numbers = [11, 2, 3, 40, 5];

let wrongResult = numbers.sort(); //this does not print arrays in the right order

console.log(wrongResult);

//you need to make a function

function compare(a, b) {
  //here we take and subtract any 2 numbers in the array
  // if result of these numbers < 0 , a value will come first
  //if result of these numbers > 0, b value will come first
  //if result = 0 , nothing will happen

  return a - b;
}

let rightResult = numbers.sort(compare);
console.log(rightResult);
