//slicing concat and spread all clone arrays
let arr1=["item1","item2"];
let arr2=[].concat(arr1);
console.log(arr1);
console.log(arr2);
//what if i were to add extra elements in arr2? lets try the same thing but giving the arrays a new name
let array1=["item1","item2"];
let array2=[].concat(array1,["item3","item4"]); //so now this array is cloned and has new elements
console.log(array1);
console.log(array2);
