// Write your function here
function getNthElementOfProperty(obj, key, n) {
    if (obj[key] && Array.isArray(obj[key]) && obj[key].length > 0) {
        if (n >= 0 && n < obj[key].length) {
            return obj[key][n];
        }
    }
}
let obj = {
    key: [1,2,6]
};
let output = getNthElementOfProperty(obj, "key", 1);
console.log(output)