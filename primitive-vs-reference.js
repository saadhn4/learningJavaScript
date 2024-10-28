//primitive vs reference datatype

//primitive
//number
let num1=6;
let num2=num1;
console.log("value of num1 is", num1); //6
console.log("value of num2 is", num2); //6
num1++;
console.log("value after incrementing num1 is");
console.log("value of num1 is", num1); //7
console.log("value of num2 is", num2); //6 ; incrementing num1 doesnt affect num2

//reference
//array
let arr1=["item1","item2"];
let arr2= arr1;
console.log(arr1);
console.log(arr2);
arr1.push("item3");
console.log("after pushing item3 to arr1");
console.log(arr1);
console.log(arr2); //unlike in num, the change here is applied in arr2 as well ie, arr2 is affected.
//arr1 and arr2 share the same address in the memory ; so there are 2 pointers but only 1 address
