//Array methods from YouTube

let firstNames = ["Danny", "Joe", "Sarah", "Molly"];

let someNumbers = [1, 2, 3, 5];

//1. toString()

let stringNames = firstNames.toString();
console.log(stringNames); //returns the names in the the array with comma after each.

//lets try this with numbers tho
let stringNumbers = someNumbers.toString();
console.log(stringNumbers); //returns the numbers in the the array with comma after each.

//2. join()

//specifies the seperator ; so instead of comma i can add $ sign or sum or even some space

stringNames = firstNames.join("$");
console.log(stringNames); //Danny$Joe$Sarah$Molly

//3. concat()

//used to combine arrays together

let firstNames2 = ["John", "Tom"];
stringNames = firstNames.concat(firstNames2); //adds john and tom to the array
console.log(stringNames);

let firstNames3 = ["Delia", "Smith"];
stringNames = firstNames.concat(firstNames2, firstNames3);
console.log(stringNames);

//4. splice()

//used to remove elements from an array and also u can add some new elements in

//lets suppose i want to remove Joe from the array (hes at index position 1)

//if i were to do 1,3 it would only leave me with danny

//it is important to note that splicing affects the original array unlike the others menioned before.

//so well make a copy of firstNames array using spread operator

let firstNamesCopy = [...firstNames];

//cutting and pasting the slice command along with the console here below this

firstNamesCopy.splice(1, 1); //here 1 is the starting value and the ending value determines how many elements starting from joe i wanna delete. Here i put 1,1 so it would only delete Joe.

console.log(firstNames); //this displays unaffected og array

console.log(firstNamesCopy); //see now it displays only danny sarah molly

//using splice to add in new elements ; replacing existing elements in the array with others

//im gonna make another array for this

let cfiStudents = ["Saad", "Omer", "Naasir", "Ismail"];

//here well be replacing omer and naasir with bill and bob

cfiStudents.splice(1, 2, "Bill", "Bob");
console.log(cfiStudents); //Saad Bill Bob Ismail in an array

//5. slice() {DIFFERENT FROM SPLICE}

//slice out parts of an array

//doesnt mutate the original array

let slice = firstNames.slice(1, 3); //STOP VALUE IS NOT COUNTED ITLL ONLY COUNT TILL THE VALUE BEFORE !!!! SO HERE ONLY JOE AND SARAH GET PRINTED NOT MOLLY
console.log(slice);

//what if i didnt give a stop value?

let slice2 = firstNames.slice(1);
console.log(slice2); //since i gave 1 here thats my starting value aka from joe itll print the rest of the elements

//6. indexOf()

//used to find the index of an element in the array

let index = firstNames.indexOf("Joe"); //displays 1
console.log(index);

//!!if i were to have 2 Joes in an array it would give me the index of the first time joe was mentioned!!

//im gonna make another copy of the firstNames array so its not confusing

let firstNames4 = [...firstNames];
console.log(firstNames4);

// i wanna add joe here  again so lets use push

firstNames4.push("Joe");
console.log(firstNames4);

//7. lets demonstrate line 119 here using lastIndexOf()

let JoeChecker = firstNames4.lastIndexOf("Joe");
console.log(JoeChecker); //prints the index of last time joe was mentioned ; so 4

//8. flat()

let nums = [1, 2, 3, 4, [5, 6], [7, 8], 9];

let flat = nums.flat();

console.log(flat); //it gets rid of the brackets inside the nested array and just displays 1 2 3 4 5 6 7 in an array

//added 7,8 inside a nested array as well for refernece of line 146

//but what if i had 2 or more nested arrays inside the array? THEN IT WOULD ONLY WORK ON THE FIRST ONE!!!!! second one would remain unaffected.

//however if i wanted to flatten both i would do this

let flat2 = nums.flat(2); //by default it starts with 1 if u left the parantheses empty

console.log(flat2); //prints [1,2,3,4,5,6,7,8,9]

//Higher order array methods

//it is a function that accepts function as arguments or returns a function

//9. forEach()

// lets go back to our firstNames array

console.log(firstNames);

//forEach() basically iterates over the array ; lets see how it works

firstNames.forEach((n) => {
  console.log(n); //first n is Danny then Joe then Sarah then Molly. itll print me their names line by line
});

//10. map ()

//lets take a new array

let nums2 = [1, 2, 3, 4, 5, 6];

//were gonna double each element and map them into a new array

let doubled = nums2.map((n) => n * 2); //[2 4 6 8 10 12]
console.log(doubled);

//with map it doesnt have to be doubling the number ; can be anything just stores it into a new array when we used doubled

//11. filter()

let posts = [
  { title: "post 1", author: "Dan" },
  { title: "post 2", author: "Dan" },
  { title: "post 3", author: "Sarah" },
];

//i wanna filter out ; create a new array where just dan is the author

let dansPosts = posts.filter((p) => p.author === "Dan");
console.log(dansPosts); //prints objects of post 1 and post 2

//12. reduce()

//taking new array

let nums3 = [1, 2, 3, 4, 5, 6];

//the sum of these elements is 21
//using reduce the only element thatll show up in the array will be 21

let reduced = nums3.reduce((total, currentValue) => total + currentValue);
console.log(reduced);

//total starts at 1 ; currently value starts at 2

//so next total is 3 and current value is 3

//next itll be 6 , 4

//then 10 , 5

//finally 15 ,6 == 21

//13. some()

//checks if some array values pass a test

//lets suppose we wanna check is greater than 5

let nums4 = [1, 2, 3, 4, 5, 6];

let isGreater = nums4.some((n) => {
  return n > 5;
});

console.log(isGreater); //true because some values r indeed greater than 5

//14. every()

let everyVal = nums4.every((n) => n >= 1);
console.log(everyVal); //if every condition is true ; itll be true. Here every number is greater or equal to 1! ; output is true

//15. find()

//we can use it to find a certain value in an array

let stock = [
  { item: "ketchup", quantity: 32 },
  { item: "mayo", quantity: 9 },
  { item: "hot sauce", quantity: 32 },
];

let mayo = stock.find((s) => s.item == "mayo");
console.log(mayo);
console.log(mayo.quantity);

//16. findIndex()

//similar to find()

//it finds the index where the element in the array matches our test statement

let mayo2 = stock.findIndex((s) => s.item == "mayo");

console.log(mayo2); //index 1

//17. sort()

let namesAgain = ["Saad", "Abdullah", "Faarhan", "Nizar", "Raquib"];

let sortedNames = namesAgain.sort();
console.log(sortedNames); //displays array in alphabetic order

//but what if u were to do this w numbers?

let numbersAgain = [2, 4, 11, 8, 5];
let sortedNumbers = numbersAgain.sort();
console.log(sortedNumbers); //it gives 11 at the start?? thats because its looking at the first digit.

//to solve this we need to use a callback function like the other higher order array methods

let rightSorted = numbersAgain.sort((a, b) => a - b); //yeah i dont get it

console.log(rightSorted);
