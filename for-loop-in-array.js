let fruits=["apple","mango","grapes","banana"];

//quick for loop revision print 0-9

// for(let i=0;i<=9;i++){
//   console.log(i);
// }

//how to find length of array
// console.log(fruits.length); //no need brackets after length unlike trim,uppercase,lowercase etc ; output is 4
// //what if i have a super long array and i want to access the last element
// console.log(fruits[fruits.length-1]) //this will give me banana

//now print array using for loop
for(let i=0;i<=fruits.length-1;i++){
  console.log(fruits[i].toUpperCase())
}

//how do i store these elements in a new array
let newarr=[]
for(let i=0;i<=fruits.length-1;i++){
  newarr.push(fruits[i].toUpperCase())
}
console.log(newarr)
