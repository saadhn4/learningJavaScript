function verifyAge(age) {
  return new Promise((resolve, reject) => {
    if (age > 18) {
      resolve("Adult");
    } else {
      reject("Child");
    }
  });
}

verifyAge(20)
  .then((correct) => console.log(correct))
  .catch((wrong) => console.log(wrong));
