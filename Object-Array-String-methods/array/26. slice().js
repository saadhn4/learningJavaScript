//slice()

//it returns a copy of a portion of an array into a new array

//it doesnt modify the original array

//this is useful when u want to extract a section of an array without affecting the original array

// array.slice(start,end)

//starting index starts with 0
//ending index starts with 1

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

//start          0  1  2  3  4  5  6  7
//end            1  2  3  4  5  6  7  8

let result = numbers.slice(0, -2);

console.log(result); //displays the last 2 elements

result2 = numbers.slice(0, 2);

console.log(result2);

//displays the first 2 elements
