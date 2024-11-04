//3. break, continue and switch

//break
//It is used to terminate the loop or switch statement.
//when break is encountered, loop or switch ends immediately.
//control is passed to the next statement after the loop or switch.

//syntax
//break;

let tableName = 2;
let startFrom = 1;
let endTill = 10;
for (startFrom; startFrom <= endTill; startFrom++) {
  console.log(`${tableName} x ${startFrom}= ${tableName * startFrom}`);
  if (startFrom == 5) {
    break;
  }
}

while (startFrom <= endTill) {
  if (startFrom == 5) {
    break;
  }
  console.log(`${tableName} x ${startFrom}= ${tableName * startFrom}`);
  startFrom++;
}

//continue

//It skips the current iteration of a loop and moves to the next iteration.
//Unlike break it doesnt terminate the loop; just skips the rest of the code inside the loop for that iteration

for (let i = 0; i < 5; i++) {
  if (i == 2) {
    continue; //skipping 2
  }
  console.log("value of i is ", i);
}

//switch

//evaluates an expression and matches it with one of multiple cases.
//each case represents a potential match, and the associated code block runs if the expression matches
//if no cases match, optional default block runs

let marks = 75;
switch (marks) {
  case 90:
    console.log("you got A");
    break;
  case 80:
    console.log("you got B");
    break;
  case 50:
    console.log("you got C");
    break;
  default:
    console.log("invalid number");
}
