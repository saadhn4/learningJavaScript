//if
//else if
//else if
//else if
//else if
//else 
//NOTE- if i have 4 else if conditions ; but my output is satisfied in the second one THEN JS WONT CHECK THE REST OF THE CONDITIONS!! it will come out of the statement

let temp=20;
if(temp<0){
  console.log("it is freezing!")
}
else if(temp<16){
  console.log("it is cold outside")
}
else if(temp<25){
  console.log("alright weather")//since my input is 20, this will be executed and it will next print my take care stm
}
else if(temp <30){
  console.log("swim time")
}
else if(temp <45){
  console.log("turn on the ac")
}
else{
  console.log("heat wave")
}
console.log("take care of yourself!")

//lets try this with > symbol

let deg=8;
if(deg > 40){
  console.log("heat wave");
}
else if (deg > 30){
  console.log("swim time");
}
else if(deg>20){
  console.log("alright weather");
}
else if(deg > 10){
  console.log("it is cold outside")
}
else{
  console.log("freezinggg")//this will be output
}