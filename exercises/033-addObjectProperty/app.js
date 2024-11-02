function addObjectProperty(obj1, key, obj2) {
  // Add your code after this line

  obj1[key] = obj2;
  return obj1;

}
let person1 = {
  name: 'Maryam',
  role: 'Madling'
};
let person2  = {
  name: "Mr. Rahimi",
  role: "softwere Engineering"
}
addObjectProperty(person1, 'manager', person2);
console.log(person1.manager)