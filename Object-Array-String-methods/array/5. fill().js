//fill ()

//the fill method changes all the elements in the array to a static value, from a start index (default 0) to an end index (default.array.length)

//syntax : arrayname.fill(value,start,end)

let arr = [1, 2, 3, 4, 5];
//         0,1,2,3,4 start
//         1,2,3,4,5 end
let check = arr.fill("Hello", 2, 4);
//so here the element at the starting index and ending index will get replaced ; HERE 3 and 4 will change to hello

console.log(check);

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let checker = myArray.fill("Saad", -2); //here -2 is my starting value so it will take the second last index. I have no ending value so it will print my name starting fromt the second last index to the end ; so 14 and 15 get replaced with Saad

console.log(checker);
