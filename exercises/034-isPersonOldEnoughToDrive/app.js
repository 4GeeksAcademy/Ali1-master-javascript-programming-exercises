function isPersonOldEnoughToDrive(person) {
  // Add your code after this line
  return person.age >= 16;
  
}
let person = {
  age: 16,
}
let output = isPersonOldEnoughToDrive(person);
console.log(output)