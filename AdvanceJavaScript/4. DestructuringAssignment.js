//Object and Array Destructuring {imp}

//It allows you to extract values from objects and arrays in a concise way

//This feature is useful when you want to pull values from complex structures and assign them to variables

//order doesnt matter here

let person = {
  fname: "Saad",
  lname: "Hussain",
  age: 20,
  isAlive: true,
};

// let fname = person.fname;
// let lname = person.lname;
// let age = person.age;
// let isAlive = person.isAlive;

// console.log(fname, lname, age, isAlive);

//Advanced way to do this :

let { fname, lname, age, isAlive } = person; //This is object destructuring
console.log(fname, lname, age, isAlive); //Saad Hussain 20 true

console.log("---------------");

//if the variable doesnt match with the key : it will give you undefined

//-------------------------------------------------------------------------------

//Array destructuring

//order matters here!!!!!!!!!!

const colors = ["red", "green", "blue"];

const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor, secondColor, thirdColor);

console.log("---------------");

//if i were to switch secondColor and firstColor in array ; red would become second color and green would be first color

//Another example for array destructuring

try {
  let arr = [1, 2, 3];
  let [one, two, three] = arr;
  console.log(one, two, three);
} catch (error) {
  console.log(`the error is ${error}`);
}
