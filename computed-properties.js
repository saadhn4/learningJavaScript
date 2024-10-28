const key1= "objkey1";
const key2= "objkey2";
const value1="myvalue1";
const value2="myvalue2";

const obj={
  [key1]: value1,
  [key2]: value2
}
console.log(obj); //my array is showing key1 and key2 instead of the string but value is perfect
//to fix this add square brackets for key1 and key2 inside the object aka line 7 and 8