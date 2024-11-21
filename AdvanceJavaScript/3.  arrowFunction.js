//Arrow function

//if your code inside {} is one line ; you dont need the braces or return keyword

//adding 2 numbers in simple function

function sum(n1, n2) {
  return n1 + n2;
}
console.log(sum(7, 2));

console.log("-----------");

//now doing this in arrow function

let add = (n1, n2) => n1 + n2;
console.log(add(7, 2));

console.log("-----------");

//area of triangle in arrow function using try catch

let area = (b, h) => {
  try {
    return 0.5 * b * h;
  } catch (error) {
    console.log(`the error is ${error}`);
  }
};

console.log(area(6, 2));

console.log("-----------");
