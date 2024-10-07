function checkAge(name, age) {
  // your code here
 if (age >= 21) {
  return `Welcome, ${name}!`;
 } else {
  return `Go home, ${name}!`
 }
  
}
let output = checkAge('Ali', 20);
console.log(output)
output = checkAge('Ali', 20);