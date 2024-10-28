//push method adds element at the end of array

let fruits=["apple","mango","orange"];
console.log(fruits);
fruits.push("banana");
console.log(fruits);

//pop removes the last element of the array
//not only does it remove the last element but it also gives it back to you
//so if i were to do console.log(fruits.pop()) -> my output would be banana

fruits.pop()
console.log(fruits) //so banana is gone

//unshift adds element at the start of an array
fruits.unshift("peach");
console.log(fruits);

//shift removes element at the start
fruits.shift()
console.log(fruits) //so peach is now gone
//not only does it remove the first element but it also gives it back to you
//so if i were to do console.log(fruits.shift()) -> my output would be peach

//push and pop are faster than unshift and shift.



