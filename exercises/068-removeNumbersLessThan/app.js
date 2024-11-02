function removeNumbersLessThan(num, obj) {
 for (let key in obj) {
    if (typeof obj[key] === "number" && obj[key] < num) {
        delete obj[key]

    }
 }
    
}



let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
removeNumbersLessThan(8, obj);
console.log(obj)

