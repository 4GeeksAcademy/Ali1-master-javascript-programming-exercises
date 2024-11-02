function addFullNameProperty(obj) {
  obj.fullName = obj.firstName + ' ' + obj.lastName;
  return obj;
}
let person = {
  firstName: 'Ali',
  lastName: 'Rahimi'
}
addFullNameProperty(person);
console.log(person.fullName )