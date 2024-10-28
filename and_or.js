//and operator
//it executes only if both the conditions are true ; uses && symbol

let firstName="Harshit";
let age = 20;
if(firstName[0]==="H" && age>=18){ //it wouldnt work if even if it was small 'h'
  console.log("first name starts with H and age is above 18")
}
else{
  console.log("whatever is inside else block will execute")
}

//or
//if block is executed if either of the condition is true ; uses ||
let lastName="Hussain";
let new_age=19
if(lastName[0]==="H" || new_age>=20){
  console.log("if block will be executed")
} //if is executed since the first condition is true and second is false
else{
  console.log("else block will be executed")
}