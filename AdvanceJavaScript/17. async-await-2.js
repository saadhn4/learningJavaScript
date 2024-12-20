//lets try making one for heads and tails

let heads = (side) => {
  return new Promise((resolve, reject) => {
    console.log("Coin is being flipped.... ");
    setTimeout(() => {
      if (side == "heads") {
        resolve(`It's ${side}!! 🪙`);
      } else {
        reject("Are you sure this is a coin? ....");
      }
    }, 1500);
  });
};

let tails = (side2) => {
  return new Promise((resolve, reject) => {
    console.log("Coin is being flipped again.... ");
    setTimeout(() => {
      if (side2 == "tails") {
        resolve(`It's ${side2}!! 🪙`);
      } else {
        reject("Are you sure this is a coin? ....");
      }
    }, 1500);
  });
};

//async part

async function headsTails(side, side2) {
  try {
    let headsFunction = await heads(side);
    console.log(headsFunction);

    let tailsFunction = await tails(side2);
    console.log(tailsFunction);
  } catch (error) {
    console.error(`${error}`);
  }
}

//async execution
headsTails("heads", "tails");
