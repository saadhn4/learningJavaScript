//Object methods

//common built in methods

//JS provides several built in methods, available through the global object

//1. Object keys (objName) (here obj is obj ka naam)

//returns an arrays of keys (property name) in the object

let person = {
  fname: "Saad", //fname and age are keys here
  age: 20,
};

console.log(Object.keys(person));

//2. Object.values (objName)

//returns an array of the value in the object

console.log(Object.values(person)); //prints saad and 20

//3. Object.entries (objName)

console.log(Object.entries(person)); //returns key and value in an array

//4. Object.assign (objName)

//this returns the object and clone the object with another

//lets suppose i have 2 objects ; obj1 and obj 2

let obj1 = {
  a: 10,
  b: 20,
};

let obj2 = {
  c: 30,
};

console.log(Object.assign(obj1, obj2)); // this prints a b c in an object
console.log(Object.assign(obj2, obj1)); //this prints c a b in an object

//5. Object.create (objName)

//It allows us to create new objects with a specified prototype object and optional addition properties.

let actor = {
  fname: "Shah Rukh Khan",
  age: 53,
};
let hero = Object.create(actor);

console.log(hero.fname); //DOUBT HEREEEE
console.log(hero.age); //DOUBT HEREEEE

//6. Object.freeze (objName)
// In JS, Object.freeze will freeze the object or key:values pair ; sp you cant add or edit anything further

let mall = {
  mallName: "GVK",
  city: "HYD",
};
Object.freeze(mall);
mall.location = "Banjara"; //this wont get added bc its frozen
console.log(mall);

//7. fromentry Object

//8. Object.is

//In JS, Object.is checks if 2 values are same or not

//here a and b both can also be considered as obkects

let a = "10";
let b = 10;

console.log(Object.is(a, b)); //returns true or false value

//if i were to put one of them as string it would return false ; as it checks the datatype also

//9. Object.isFrozen (objName);

//checks if the object is actually frozen or not

console.log(Object.isFrozen(mall));

//10. Object.toString();

//this converts a decimal number into binary,octal or hexadecimal {you have to specify it in ()}

let number = 64;
console.log(number.toString(2)); //this converts 64 to binary

//11. Object.seal (objName);

//you can update the EXISTING values (not keys) but you CANNOT add or delete anything.

let cfi = {
  insName: "Suhail",
  age: 22,
};
Object.seal(cfi);
cfi.insName = "Fawaz"; //this changes suhail to fawaz
console.log(cfi);

//lets try adding smth

cfi.gender = "male"; //this will not get added. Once u seal you cannot add or delete you can only update.
console.log(cfi);

//12. Object.isSealed();

//checks if object is sealed or not ; returns true or false.

console.log(Object.isSealed(cfi)); //true

function conversion(decimal, string) {
  return console.log(decimal.toString(string));
}
conversion(10, 2); //this function returns 10's binary number.
