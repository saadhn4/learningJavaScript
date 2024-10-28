//starting now we will always use const to create arrays ; cuz with const the elements inside the array wont get replaced unlike with let.

const fruits=["apple","banana"];
console.log(fruits);
//we learned that we cant make changes if we use const right? lets try pushing an element into the arr
fruits.push("peach");
console.log(fruits); //why is peach being added if we cant make changes? this is a misunderstanding as we can push and pop elements BUT we cannot replacr the already existing elements "apple" and "banana"
//lets try replacing them
// fruits=["mango","orange"]
// console.log(fruits); ILL GET ERROR HERE ; original array would get replaced w these 2 tho if i used let keyword.