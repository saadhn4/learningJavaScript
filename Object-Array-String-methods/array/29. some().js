//some()

//returns true even if one of the values matches the condition

//unlike every(), where each value needs to match the condition

let num = [1, 6, 9, 2, 4, 7, 1, 6, 8];

let check = num.some((x) => x % 2 == 0);

console.log(check);
