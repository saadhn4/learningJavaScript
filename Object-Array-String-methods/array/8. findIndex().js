//extension of find()

//the first condition that matches itll print that

let number = [5, 12, 15, 23];
let check = number.findIndex((x) => {
  return x > 10;
});
console.log(check);
