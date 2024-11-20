//map()

//it is used to transform each element in an array and returns a new array with the transformed element.

//Its useful when you want to apply a function to each element and store the result in a new array

let numbers = [5, 4, 3, 2, 1];

console.log(numbers.map((x) => x * x).filter((x) => x > 9));

//map is doing this - [25,16,9,4,1] then it is filtering out the values which is greater than 9
//so the final output is [25,16]

//first step i can use forEach as well but i cannot filter values with it.

//it will give undefined.
