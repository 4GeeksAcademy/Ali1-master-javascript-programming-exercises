function removeProperty(obj, key) {
  // your code here
  delete obj[key];
  return obj;
}
let obj = {
  name: 'Ali',
  age: 20
};
removeProperty(obj, 'name')
console.log(obj.name)