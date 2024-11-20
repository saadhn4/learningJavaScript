//4. every()

let arr = [2, 3, 15, 20];
let check = arr.every((n) => {
  return n > 15;
});
console.log(check);

//checks if every value is greater than 15 or not; even if 1 is not it will print false
