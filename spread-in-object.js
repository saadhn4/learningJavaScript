//lets do a revision of spread in array first
const arr1= [1,2,3];
const arr2=[4,5,6];
// const arr3=[...arr1,...arr2,89,69]; //new array of [1,2,3,4,5,6,89,69]
const arr3= [..."abc"] //it will create a new array of [a,b,c] ; only works for strings
console.log(arr3); 

//spread opreator in objects
const obj1= {
  key1: "value1",
  key2:"value2",
};
const obj2= {
  key3: "value3",
  key4:"value4",
};
const obj3={...obj1,...obj2, key5:"value5"}; //combines 2 objects and then adds a 5th key w 5th value
console.log(obj3);



