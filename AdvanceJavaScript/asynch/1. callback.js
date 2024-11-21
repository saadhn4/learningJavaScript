function checkStock(product, callback, errorCallback) {
  console.log(`Checking stock for ${product}...`);
  setTimeout(() => {
    if (product === "Laptop") {
      callback(`${product} is available in the inventory! 💻`);
    } else {
      errorCallback(`${product} is not listed in the inventory! 😢`);
    }
  }, 2000);
}

function checkWarehouse(product, callback, errorCallback) {
  console.log(`Checking warehouse for ${product}...`);
  setTimeout(() => {
    const warehouseAvailable = true;
    if (warehouseAvailable) {
      callback(`${product} is available in the warehouse! 🏭`);
    } else {
      errorCallback(`${product} is not available in the warehouse! ❌`);
    }
  }, 1500);
}

function checkAvailability(product, callback, errorCallback) {
  console.log(`Checking availability of ${product} at local stores...`);
  setTimeout(() => {
    const locallyAvailable = true;
    if (locallyAvailable) {
      callback(`${product} is available at local stores! 🏪`);
    } else {
      errorCallback(`${product} is not available locally! 😔`);
    }
  }, 1000);
}

function shipToStore(product, callback) {
  console.log(`Shipping ${product} to the store...`);
  setTimeout(() => {
    callback(`${product} has been shipped to the store successfully! 🚚`);
  }, 2000);
}

// Callback execution
checkStock(
  "Laptop",
  (message1) => {
    console.log("Success:", message1);
    checkWarehouse(
      "Laptop",
      (message2) => {
        console.log("Success:", message2);
        checkAvailability(
          "Laptop",
          (message3) => {
            console.log("Success:", message3);
            shipToStore("Laptop", (message4) => {
              console.log("Success:", message4);
              console.log(
                "Process complete: Your product is ready for pickup! ✅"
              );
            });
          },
          console.error
        );
      },
      console.error
    );
  },
  console.error
);
