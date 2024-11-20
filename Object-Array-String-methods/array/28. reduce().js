//reduce()

//it executes a reduce function on each element of the array resulting in a single output value

//its commonly used to to accumultate values (summing numbers, concatenating string)

//array.reduce((acc,curr) => acc + curr,0);

let number = [10, 20, 30, 40, 50];
let sum = number.reduce((acc, curr) => acc + curr, 0);

console.log(sum);

//1. acc = 0 curr = 10
// 2. acc =10 curr = 20 =30
//3. acc =30 curr =  30 = 60
// 4.acc = 60 curr  40 =100
//5. acc= 100   50 =150
