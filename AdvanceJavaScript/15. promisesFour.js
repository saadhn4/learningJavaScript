function checkStock(product) {
  return new Promise((resolve, reject) => {
    console.log(`Checking stock for ${product}...`);
    setTimeout(() => {
      if (product == "laptop") {
        resolve(`${product} is in stock!! 💻`);
      } else {
        reject(`${product} is not in stock !! :(`);
      }
    }, 2000);
  });
}

function checkWarehouse(product) {
  return new Promise((resolve, reject) => {
    console.log(`Checking warehouse for ${product}...`);
    setTimeout(() => {
      let warehouseAvailable = true;
      if (warehouseAvailable) {
        resolve(`${product} is available in the warehouse!`);
      } else {
        reject(`${product} is not available in the warehouse`);
      }
    }, 2000);
  });
}

function checkAvailability(product) {
  return new Promise((resolve, reject) => {
    console.log(`Checking availability for ${product}...`);
    setTimeout(() => {
      let availability = true;
      if (availability) {
        resolve(`${product} is available!!!`);
      } else {
        reject(`${product} is not available :(`);
      }
    }, 2000);
  });
}

function shipToStore(product) {
  return new Promise((resolve) => {
    console.log(`Shipping ${product} to the store...`);
    setTimeout(() => {
      resolve(`Your ${product} has been shipped succesfully 🚚`);
    }, 2000);
  });
}

//Executing the flow
checkStock("laptop")
  .then((message) => {
    console.log(message);
    return checkWarehouse("Product");
  })
  .then((message) => {
    console.log(message);
    return checkAvailability("laptop");
  })
  .then((message) => {
    console.log(message);
    return shipToStore("laptop");
  })
  .then((message) => {
    console.log(message);
    console.log(`Process complete: Your product is ready for pickup!!!`);
  })
  .catch((error) => {
    console.log(error);
    console.log("Process terminated: Cannot proceed further. ❌");
  });
