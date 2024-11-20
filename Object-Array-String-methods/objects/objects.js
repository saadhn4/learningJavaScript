let details = {
  firstName: "Saad",
  age: 20,
  college: "ISTTM",
};

let keysChecker = Object.keys(details);

console.log(keysChecker); //firstname age college

//2. Object.values()

let valueChecker = Object.values(details);
console.log(valueChecker);

//3. Object.entries()

let entryChecker = Object.entries(details);
console.log(entryChecker);

//4. Object.assign()

//clones an object with another

let obj1 = {
  x: 10,
  y: 20,
};

let obj2 = {
  z: 30,
};

console.log(Object.assign(obj1, obj2)); //prints x y z
console.log(Object.assign(obj2, obj1)); //prints z x y

//5. Object.create()
//i have doubt in this

//6. Object.freeze()
// In JS, Object.freeze will freeze the object or key:values pair ; so you cant add or edit anything further

let mall = {
  name: "GVK",
  location: "Hyd",
};
Object.freeze(mall);
mall.parking = "underground";
console.log(mall); //parking doesnt get added

//7. Object.isFrozen()

console.log(Object.isFrozen(mall)); //true

//8. Object.is ()

//checks if 2 objects are same

//checks for datatype AND VALUE

let a = "4";
let b = 4;
console.log(Object.is(a, b)); //false bc a is string

//9. Object.toString()

//convers decimal to binary octal or hexa

let decimal = 10;
let conversion = decimal.toString(2);
console.log(conversion); //1010

//10. Object.seal()

let animals = {
  type: "penguin",
  quantity: 22,
};
Object.seal(animals);

//lets try adding smth to this

animals.time = "55 years";
console.log(animals); //doesnt get added

//lets edit penguin into giraffe

animals.type = "giraffe";
console.log(animals); //so it lets me update the value but not add anything else mmm

console.log(Object.isSealed(animals)); //true
