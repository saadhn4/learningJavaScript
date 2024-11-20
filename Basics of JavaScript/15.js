//2. Loops

//Loops are used to repeatedly execute a block of code as long as a specified condition is met.

//2 main type of loops:

//1. Entry controlled loops: The condition is checked before the loop body is executed. (for and while)

//2. Exit controlled loop: The condition is checked after they loop body has been executed at least once (do .. while)

//for loop:

//it runs a block of code a specific number of times. Typically used when the number of iterations is known.
//for is a keyword

//syntax:
//for (initialization; condition; increment/decrement) {
//       code of block to be executed
//};

//1. initialization
//2. condition
//3. code block
//4. increment
//5. repeat from from 2 till the condition is false ; as soon as the condition is false, loop will end

for (let i=1 ; i<=5 ; i++) {
  console.log(i); //prints numbers 1-5
} 

for (let i=1; i<=10; i++){
  console.log("Hello",i); //Hello 1 Hello 2 Hello 3 .... Hello 10
}

//template literals:
//within the string if you want to use variables , use template literls
//""``"" esc ke niche wala button

//multiplication table

for (let i=1 ; i<=10; i++){
  console.log(`2 x ${i} = ${i*2}`);
}

//5 ka table

for (let i=1 ; i<=100 ; i++){
  console.log(`5x${i} = ${i*5}`);
}

//29 ka table
for (let i=1 ; i<=10 ; i++) {
  console.log(`29 x ${i} = ${i*29}`);
}

//while loop:

//while is a keyword
//it is used to iterate over the code multiple times

//declaration:

// while (condition) {
//  code block
//  increment/decrement
// };

//only difference is increment/decrement code block ki next line mai rehta

// let i=1;
// for (i;i<=5;i++) {
//   console.log (i);
// }
// i can also assign the value to i outside. 

//lets do the above program in while loop

let j=1; //initializing the value outside
while (j<=5) { //only condition in the parenthesis
  console.log ("Hello",j); //code block
  j++; //increment
}

//2's mul table in while loop

let k = 1;
while (k<=10) {
  console.log (`2 x ${k}= ${k*2}`)
  k++;
}

//do for 5

l = 1;
while(l <= 10) {
  console.log(`5 x ${l}= ${l*5}`)
  l++;
}

//exit control loops

//1. do while loop

//do while is a key word
//do while is a loop which is used to iterate the code multiple times
//in do while the while condition is checked at the end of the loop.. so it executes atleast once even if the condition is false and THEN checks condition
//it should have semicolon at the end
//Note - **semicolon sirf while k baad aata**

//Declaration:

// do {
//   code 
//   increment
// }
// while (condition);

let i = 0
do {
  console.log(i);
  i++;
}
while (i < 10); //prints 0-9

let p = 10;
do {
  console.log(p);
  p++;
}
while (p < 10); //only 10 itll print

let n= 1;
do {
  console.log(`2x${n}= ${n*2}`)
  n++;
} while (n<=10);


//square table
let m=1;
do{
  console.log(`${m} x ${m} = ${m*m}`)
  m++;
} while(m<=10);

//power table
let f=1;
do{
  console.log(`${f} ^ ${f} = ${f**f}`)
  f++;
} while(f<=10);

//Summary
//1. for and while loops are entry controlled loops
//2. do ...while is an exit controlled loop, ensurung at least one execution of the loop block










