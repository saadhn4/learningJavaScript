//In var, you can redeclare and reassign

//Redeclare

/*

JS follows order from top to bottom
in var if i give a=10, then in the next line do a="20";
itll update and overwrite the value in my variable and print 20

*/

//Redeclare

//method1
var a=10;
var a=20;
var a=50; //this will be output
console.log(a);

//method2
var a=10;
a=20;
a=50;
console.log(a);