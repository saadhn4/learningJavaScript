//Explicit conversion
//Here, we use built in methods 
//Note - BOOLEAN HAS VALUE!!! NULL IS 0

//1. Converting to numbers using Number() ; CAPITAL """"""N""""""

let results;
results = Number("60");
console.log(results, typeof results); //60 number
results = Number("hello");
console.log(results, typeof results); //Nan number
results= Number(true); //BOOLEAN HAS VALUE
console.log(results, typeof results); //1 number
results=Number(null);
console.log(results, typeof results); //0 number
results=Number(undefined);
console.log(results, typeof results); //Nan number

//2. Converting to string using String() ; CAPITAL """""S"""""""

let str;
str= String(5);
console.log(str, typeof str); //5 string

str= String(true);
console.log(str, typeof str); //true string

str= String(null);
console.log(str, typeof str); // null string

str= String(undefined);
console.log(str, typeof str); //undefined string

//3. Converting to Boolean using Boolean(); CAPITAL """"""B"""""""
//Note - **Empty string is false ; Unempty string will be true.**

let b;
b=Boolean("hello");
console.log(b, typeof b); //true boolean

b = Boolean(5);
console.log(b, typeof b); //true boolean

b = Boolean(null);
console.log(b, typeof b); // false boolean

b = Boolean("");
console.log(b, typeof b); //false boolean

b= Boolean(undefined);
console.log(b, typeof b); //false boolean







