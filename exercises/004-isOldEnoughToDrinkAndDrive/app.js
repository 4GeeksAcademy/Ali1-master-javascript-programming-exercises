function isOldEnoughToDrinkAndDrive(age) {
  // It is always illegal to drink and drive in the United States
  return false;
}

// Example usage:
let output = isOldEnoughToDrinkAndDrive(22);
console.log(output); // --> false

output = isOldEnoughToDrinkAndDrive(16);
console.log(output); // --> false

output = isOldEnoughToDrinkAndDrive(30);
console.log(output); // --> false