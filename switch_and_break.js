//switch statement is very much like if else if , but instead of coming out of the loop it will execute the rest of the conditions as well. To stop this we have break statement.

//SWITCH DOESNT WORK WITH >,< ETC!!!!!! if i want to use these symbols i have to do in 'if else if'

//0 is sunday 1 is monday ... 6 is saturday and anything else is invalid

let day=2;
switch(day){ //here day is the variable value were checking thats why its here
  case 0: //add the value youre checking for after case
    console.log("Sunday");
    break;
    case 1:
      console.log("Monday");
      break;
      case 2:
        console.log("Tuesday");
        break;
        case 3:
          console.log("Wednesday")
          break;
          case 4:
            console.log("Thursday")
            break;
            case 5:
              console.log("Friday")
              break;
              case 6:
                console.log("Saturday")
                break;
                default:
                  console.log("Invalid day")
                  break;
}

//since my input here is 2 it will print tueday and all remaining cases ; i will add break after each case for this reason
//now itll only show tuesday

//another program
temp=10;
switch(temp){
  case 50:
    console.log("heat wave");
    break;
    case 40:
    console.log("normal day here");
    break;
    case 30:
      console.log("still normal");
      break;
      case 20:
        console.log("damn kinda cold");
        break;
        case 10:
          console.log("this is too cold"); //thisll be my output
          break;
          default:
            console.log("invalid number")
            break;
}