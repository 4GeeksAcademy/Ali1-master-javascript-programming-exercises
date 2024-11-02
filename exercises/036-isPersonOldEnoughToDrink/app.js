function isPersonOldEnoughToDrink(person) {
  // Check if the person's age is 19 or older
  return person.age >= 21;
}

// Example usage:
let personObj = {
  age: 20
};
let output = isPersonOldEnoughToDrink(personObj);
console.log(output); // --> false