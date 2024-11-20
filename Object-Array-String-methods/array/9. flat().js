//flat()

//flat method creates a new array with all sub-array element concatenated into it recursively upto the specified depth

let array = [1, 2, 3, [4, 5, [6, 7]]];
let check1 = array.flat(1);
console.log(check1);
let check2 = array.flat(2);
console.log(check2);

//to do it all at once ; instead of 1 and 2 you can just add infinity
