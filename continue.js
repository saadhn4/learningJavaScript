//as soon as i reaches 4, itll skip that and continue the loop from the next number ; lets see

// for(let i=0;i<=10;i++){
//   console.log(i)
// } till here we know itll execute numbers 0-10

//now lets add a condition and continue keyword inside the loop
for(let i=1;i<=10;i++){
  if(i===4){
    continue;
  }
    console.log(i)
  } //output is 1 2 3 5 6 7 8 9 10