//Date and Time in JavaScript

//JS provides a built-in Date object to handle date and time operations

//1. Creating a Date Object

let currentTime = new Date(); //UTC timezone
//The string 2024-11-19T04:40:07.728Z is an ISO 8601 formatted date and time
console.log(currentTime);

/*

2024-11-19T04:40:07.728Z means:
The date is November 19, 2024
The time is 04:40:07 and 728 milliseconds

*/

//Date methods

const date = new Date();

console.log(date); //2024-11-19T04:49:50.051Z
console.log(date.getFullYear()); //2024
console.log(date.getMonth()); //10 (0 - January)
console.log(date.getDay()); //2 (0- Sunday)
console.log(date.getHours()); //10 (IST lera)
console.log(date.getMinutes()); //22 (IST)
console.log(date.getSeconds()); //59 (IST)
console.log(date.toISOString()); //2024-11-19T04:52:59.207Z

console.log("---------------");

//JavaScript Epoch Time

/*

Epoch time (or Unix timestamp) represents the number of milliseconds (Or seconds in some contexts)
that have elapsed since January 1, 1970, 00:00:00 UTC
commonly refereed to as the Unix epoch.

JavaScript uses milliseconds to represent epoch time

*/

let a = new Date(); //current date and time in UTC
console.log(a); // 2024-11-19T05:14:21.358Z
let b = new Date(1731994558752); //khud ki date diya; from january 1 1970 se itte milliseconds baad date
console.log(b); //2024-11-19T05:35:58.752Z
let c = new Date("2024-11-19");
console.log(c); // 2024-11-19T00:00:00.000Z
let d = new Date(2023, 1, 11, 11, 20, 23, 20); //2023 11 february 11:20:23 20 milliseconds
console.log(d); //2023-02-11T05:50:23.020Z

console.log("---------------");

//Convert Date into Milliseonds
console.log(Date.parse(new Date()));

console.log("---------------");

//Converting Date any standard timezone

let ist = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
console.log(ist);
let ist2 = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
console.log(ist2); //same print karta ; 19/11/2024, 11:18:18 am

console.log("---------------");

let dateNow = new Date().toLocaleString("en-US", {
  timeZone: "Asia/Kolkata",
  month: "long",
  day: "2-digit",
  year: "numeric",
  weekday: "short",
  hour: "2-digit",
  minute: "numeric",
  second: "numeric",
  dayPeriod: "short",
});

console.log(dateNow);
