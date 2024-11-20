//find()

//this method returns the value of the first element in the array that satisfies the provided testing function.

//if no element satisfy the testing function , it returns undefined.

//finds the first element in an array that matches a condition and returns that element

//syntax: array.find(callback(element,index,array), thisarg)

//same as filter

let number = [1, 2, 3, 4, -5, -6, 8];
let check = number.find((x) => {
  return x < 0;
});
console.log(check);

//-5 is the first element that is less than 0. eventho there is -6, find checks the first value that it finds and then returns it.
