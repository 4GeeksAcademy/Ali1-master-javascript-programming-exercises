function getProperty(obj, key) {
  // your code here
  return obj[key];
  
}
let car = {
  model: 'Toyota',
  color: 'Black',
  cost: '1.4B'
}
let output = getProperty(car, 'cost')
console.log(output)