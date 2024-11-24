function displayFirst(number) {
  return new Promise((resolve, reject) => {
    console.log("Printing first number...");
    setTimeout(() => {
      if (number == 2) {
        resolve(`Success: ${number}`);
      } else {
        reject("This is not the number");
      }
    }, 2000);
  });
}

function displaySecond(number2) {
  return new Promise((resolve, reject) => {
    console.log("Printing second number...");
    setTimeout(() => {
      if (number2 == 8) {
        resolve(`Success: ${number2}`);
      } else {
        reject("Error: Not expected number");
      }
    }, 2500);
  });
}

function displayingTogether() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("The number 🔢 printed is 28!!! hi dannah :3");
    }, 1000);
  });
}

// async part
async function numberChecker(number, number2) {
  try {
    let firstFunction = await displayFirst(number);
    console.log(firstFunction);

    let secondFunction = await displaySecond(number2);
    console.log(secondFunction);

    let thirdFunction = await displayingTogether();
    console.log(thirdFunction);
  } catch (error) {
    console.error(error);
  }
}

//async execution
numberChecker(2, 8);
