//splice()

//it changes the contents of an array by removing,replacing or adding elements

//unlike slice, splice modifies the original array

//it changes the content of an array

let numbers = [1, 2, 3, 4, 5];

//i want to remove the last 3 elements

let deleted = numbers.splice(2, 3);

//2 ; starting index
//3; how many elements i want to remove

console.log(deleted); //it returns an array of the numbers we deleted [3,4,5]

console.log(numbers); //[1,2] these are the only elements remaining in the array

let numbers2 = [1, 2, 3, 4, 5];

//now i want to remove first 2

let result = numbers2.splice(0, 2);
console.log(result);
console.log(numbers2); //[3,4,5]

//what if i were to add numbers in place of the ones i deleted

let arr = [1, 2, 3, 4, 5];

//lets remove 4 and 5 ; add 6 and 7 in their place aka replace

let deleted2 = arr.splice(3, 2, 6, 7);

console.log(arr);
