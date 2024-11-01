//JavaScript type conversions
//Note - BOOLEAN HAS VALUE!!!! , null's value is 0

/*

The process of converting data of one type to another 

Example: String to number

There are 2 types of conversion--
1. Implicit
2.Explicit (next file)

Implicit conversions happens **automatically** when JS tries to perform an operation between different types, converting values to a common type

Explicit conversions requires functions or methods to manually convert types.
Common functions are String(), Number() and Boolean()

List of Datatypes- 
1. String => Number, Boolean, null, undefined
2. Number=> String, Boolean, null, undefined
3. Boolean=> String, Number, null, undefined 
4. null => String, Number, Boolean, Undefined
5. undefined=> String, Number, Boolean, null

*/

//Implitcit conversion

//1. Any datatype to string (using + operator)

let marks= 2 + "";
console.log(marks, typeof marks); //2 string. basic of how to convert number to string

 marks= 2 + "0";
console.log(marks, typeof marks);// 20 string


marks= "3" + undefined;
console.log(marks, typeof marks); //3undefined string

//**if we add a string and then + any datatype itll just concat and make the variable string.**

marks= false + "10";
console.log(marks, typeof marks); //false10 string

marks= null + "";
console.log(marks, typeof marks); //null string


//2. Any datatype to number (using "-" "/" "*" operator)

let results;
results = "4" - 0; //here subtraction will happen but if it were + itd just be 42 ; also 4 number 
console.log(results, typeof results);

results = "0" - "0";
console.log(results, typeof results); // 0 number number bc only in + itll convert to string

results= "3" - "2";
console.log(results, typeof results); //1 number

results = "hi" - 3;
console.log(results, typeof results); //NaN number

results = true - 3;
console.log(results, typeof results); //true's value is 1, so 1-3= -2 ; output is -2 number

results= "4" - false;
console.log(results, typeof results); //4-0=4 ; 4 number

results = "5" * 3;
console.log(results, typeof results); //15 number

//Any datatype to Boolean

let check = "5" + true;
console.log (check, typeof check); //5true string

check= "4" - false;
console.log (check, typeof check); // 4 number

check = 4 + true;
console.log (check, typeof check); //5 number ; ya string hai number nai

//null to Number
//null = 0

let test= 4 + null;
console.log (test, typeof test); //4 number

test = "5" + null;
console.log (test, typeof test); //5null string

test = 4 - null;
console.log (test, typeof test); //4 number

//Any datatype to undefined

let final= undefined + "Test";
console.log (final, typeof final); //undefinedTest string

final = undefined - "Test";
console.log (final, typeof final); //NaN number

final= 4 - '0';
console.log (final, typeof final); //4 number

//My own practice 

//any to string

let practice= "4" + 0;
console.log (practice, typeof practice); //40 String
practice = "922" + 4;
console.log (practice, typeof practice); //9224 string
practice = "hello" + true;
console.log (practice, typeof practice); //hellotrue string
practice = "hi" + null;
console.log (practice, typeof practice); //hinull string

//any to number
practice = "4" - 5;
console.log (practice, typeof practice); //-1 number
practice = true -3;
console.log (practice, typeof practice); //-2 Number ; BOOLEAN HAS VALUE!!!!
practice = null - 0; //null value is 0;
console.log (practice, typeof practice); //0 number
practice = undefined - 0;
console.log (practice, typeof practice); //Nan Number

//any to boolean
practice = true + true; // BOOLEAN HAS VALUE!!!!
console.log (practice, typeof practice);
practice = true + "hello";
console.log (practice, typeof practice); //truehello string
practice = true - 1;
console.log (practice, typeof practice); //0 number













