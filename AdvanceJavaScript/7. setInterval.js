//setInterval

//Purpose: executes a function repeatedly at specified intervals (in milliseconds)

//syntax: setInterval(function,delay,param1,param2)

// setInterval(() => {
//   console.log("Hello");
// }, 1000);

//since our arrow fn has only one line we can also write it like:

let timer = setInterval(() => console.log("Hi"), 1000); //hi gets print repeatedly after every 1 second

//wont this be an infinite loop tho? we need to stop it
//to stop it we use setTimeout() and clearInterval(variable)
//i'll store my setInterval fn in a variable called timer

setTimeout(() => {
  clearInterval(timer);
}, 6000);

//so here Hi gets printed 5 times and it stops EXACTLY at the 6th second. 6 seconds tak run hota, lekin 5 baar print hota
