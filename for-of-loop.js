//in for of loop we usually name the og array in plural and the next variable in singular ; lets see
const fruits=["fruit1","fruit2","fruit3"];
const fruits2=[]
for(let fruit of fruits){
  fruits2.push(fruit.toUpperCase());
}
console.log(fruits2)

//usually used to iterate over a loop