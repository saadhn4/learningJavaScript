//real world applications

const obj=[
  {userid:1,firstName:"Saad",age:20},
  {userid:2,firstName:"Sameer",age:21},
  {userid:3,firstName:"Saif",age:22},
]
console.log(obj);

//iterate over this object using for of loop
for(let ob of obj){
  console.log(ob); //it will display each individually
}
//what if i want to specifically pickout a key lets say firstName and see all firstnames
for(let ob of obj){
  console.log(ob.firstName);
}
