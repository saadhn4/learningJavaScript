//falsy values are the following
//false
//0
//undefined
//null
//"" ; aka empty string

let firstName="";
if(firstName){
  console.log(firstName)
}
else{
  console.log("this is a falsy value")
} //so since i gave an empty string here, else condition will execute. if i were to give anything else other than those values it would run the if condition.