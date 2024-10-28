//slicing concat and spread all clone arrays
let arr1= ["item1", "item2"];
let arr2= arr1.slice(0).concat(["item3","item4"]); //in slicing if i dont add a stop value itll add all the items from the starting position specified
console.log(arr1);
console.log(arr2);
//now lets see if i push an item3 in arr1 will it affect arr2
arr1.push("item3");
console.log(arr1);
console.log(arr2); //no change in array2

//what if i want to add extra items in arr2 tho? ; ill do what im doing after the slice command