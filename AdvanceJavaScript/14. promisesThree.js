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

checkStock("laptop")
  .then((success) => console.log(success))
  .catch((error) => console.log(error));
