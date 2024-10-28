//slicing concat and spread all clone arrays
let arr1=["item1","item2"];
let arr2=[...arr1];
console.log(arr1);
console.log(arr2);
let newArray=['item5', 'item6'];
//what if i were to add extra elements in arr2? lets try the same thing but giving the arrays a new name
let array1=["item1","item2"];
let array2=[...array1,"item3","item4",...newArray]; //unlike concat, i dont need extra brackets here also i concatted array2 with new array
console.log(array1);
console.log(array2)