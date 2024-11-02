function isPersonOldEnoughToVote(person) {
 return person.age >= 18;
  
}
let personObj = {
  age: 16
}
let output = isPersonOldEnoughToVote(personObj)
console.log(output)