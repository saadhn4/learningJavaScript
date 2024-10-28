//nested if else ; an if statement inside an if else statement

//create a game based on this logic
//winning number = 19
//19 your guess is right
//>19, too high!
//<19, too low!

let winningNumber=19;
let userGuess=+prompt("Enter your number"); // this will open an input prompt in your browser ; since its taking the output in string im gonna add + before prompt so it takes it in number
if(userGuess===winningNumber){
  console.log("Your guess is right!");
}
else{
  if(userGuess<winningNumber){
    console.log("too low!");
  }
  else{
    console.log("too high!");
  }

}