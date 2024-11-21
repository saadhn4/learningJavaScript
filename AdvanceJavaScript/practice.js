//for of (only for arrays and string)

// //1. arrays

// let arr = [1, 2, 32, 3, 2, 3, 4];
// for (let i of arr) {
//   console.log(i);
// }

// //2. string

// let str = "Omer bada haula";

// for (let i of str) {
//   console.log(i);
// }

// //for in

// //1. objects only

// let details = {
//   fname: "Saad",
//   lname: "Hussain",
//   age: 20,
//   phone: 9030358367,
// };

// //print only the keys

// for (let i in details) {
//   console.log(i);
// }

// //print keys and values

// for (let i in details) {
//   console.log(i, details[i]);
// }

// //destructuring

// //1. objects

// let google = {
//   email: "sjkksajs@ex.com",
//   pass: "*******",
//   recovery: "oepwji@yahoo.co.uk",
// };

// let { email, pass, recovery } = google;
// console.log(email);
// console.log(pass);
// console.log(recovery);

// //2. arrays

// let names = ["Saad", "Rehman", "Sneha", "Omer", "Muzammil"];
// let [first, second, third, fourth, fifth] = names;
// console.log(first, second, third, fourth, fifth);

// //3. arrow functions

// //2 pi r circum

// let circumference = (r) => {
//   return 3.14 * r * r;
// };
// let result = circumference(2);
// console.log(result);

// //area of circle 2 pi r area

// let area = (r) => {
//   return 2 * 3.14 * r;
// };
// let areaReasult = area(5);
// console.log(areaReasult);

//try catch

// try {
//   let a = 5;
//   console.log(a / b);
// } catch (error) {
//   console.log(`the error is ${error}`);
// } finally {
//   console.log("thats it boss");
// }

// let eligibilityChecker = (marks) => {
//   if (marks >= 90 && marks <= 100) {
//     return "You can stay at CFI";
//   } else {
//     return "Jaiyye aap";
//   }
// };
// let resultOfPhaseI = eligibilityChecker(92);
// console.log(resultOfPhaseI);

// try {
//   let numberChecker = (n) => {
//     if (n < 0) {
//       return "negative";
//     } else if (n == 0) {
//       return "zero";
//     } else {
//       return "positive";
//     }
//   };
//   let result2 = numberChecker(-15);
//   console.log(result2);
// } catch (error) {
//   console.log(`the error is ${error}`);
// }

// try {
//   let leapYearChecker = (year) => {
//     if (year % 4 == 0) {
//       return "leap year";
//     } else {
//       return "not a leap year";
//     }
//   };
//   let result = leapYearChecker(2004);
//   console.log(result);
// } catch (error) {
//   console.log(`the error is ${error}`);
// }

//spread and rest operator

//spread

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [...arr1, 6]; //[1,2,3,4,5,6]
// console.log(arr2);

// let names = ["Saad", "Omer"];
// let names2 = [...names, "John"];
// console.log(names2);

// //rest

// let display = (...input) => {
//   console.log(input);
// };
// display(3, 4, 5);

// let displayNames = (...names) => {
//   return names;
// };
// console.log(displayNames("Saad", "Omer", "Ismail"));

//function for displaying specific number backwards using recursion

let display = (number) => {
  if (number <= 0) {
    return;
  }
  console.log(number);
  return display(number - 1);
};
display(5);

console.log("--------");

let stopper = 5;
let displayFront = (number) => {
  if (number > stopper) {
    return;
  }
  console.log(number);
  return displayFront(number + 1);
};
displayFront(2);

console.log("--------");

let factorial = (number) => {
  if (number == 0 || number == 1) {
    return 1;
  }
  return number * factorial(number - 1);
};
console.log(factorial(5));

console.log("--------");

let back = (n) => {
  if (n <= 0) {
    return;
  }
  console.log(n);
  return back(n - 1);
};
back(5);

console.log("--------");

let printTill = 10;
let front = (x) => {
  if (x > printTill) {
    return;
  }
  console.log(x);
  return front(x + 1);
};
front(1);
