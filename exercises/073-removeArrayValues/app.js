function removeArrayValues(obj) {
  for (let key in obj) {
    if (Array.isArray(obj[key])) {
        delete obj[key];
    }
  }
    

}
let obj = {
    a: [1,2,3],
    b: 2,
    c: ["hi", 'there']
};
removeArrayValues(obj);
console.log(obj)