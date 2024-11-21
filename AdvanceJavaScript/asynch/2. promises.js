function checkStock(product) {
  return new Promise((resolve, reject) => {
    console.log(`Checking stock for ${product}...`);
    setTimeout(() => {
      if (product === "Laptop") {
        resolve(`${product} is available in the inventory! 💻`);
      } else {
        reject(`${product} is not listed in the inventory! 😢`);
      }
    }, 2000);
  });
}

function checkWarehouse(product) {
  return new Promise((resolve, reject) => {
    console.log(`Checking warehouse for ${product}...`);
    setTimeout(() => {
      const warehouseAvailable = true;
      if (warehouseAvailable) {
        resolve(`${product} is available in the warehouse! 🏭`);
      } else {
        reject(`${product} is not available in the warehouse! ❌`);
      }
    }, 1500);
  });
}

function checkAvailability(product) {
  return new Promise((resolve, reject) => {
    console.log(`Checking availability of ${product} at local stores...`);
    setTimeout(() => {
      const locallyAvailable = true;
      if (locallyAvailable) {
        resolve(`${product} is available at local stores! 🏪`);
      } else {
        reject(`${product} is not available locally! 😔`);
      }
    }, 1000);
  });
}

function shipToStore(product) {
  return new Promise((resolve) => {
    console.log(`Shipping ${product} to the store...`);
    setTimeout(() => {
      resolve(`${product} has been shipped to the store successfully! 🚚`);
    }, 2000);
  });
}

// .then() execution

checkStock("Laptop")
  .then((message1) => {
    console.log("Success:", message1);
    return checkWarehouse("Laptop");
  })
  .then((message2) => {
    console.log("Success:", message2);
    return checkAvailability("Laptop");
  })
  .then((message3) => {
    console.log("Success:", message3);
    return shipToStore("Laptop");
  })
  .then((message4) => {
    console.log("Success:", message4);
    console.log("Process complete: Your product is ready for pickup! ✅");
  })
  .catch((error) => {
    console.error("Error:", error);
  });
