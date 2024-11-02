function getFirstElementOfProperty(obj, key) {
    if(obj[key] &&Array.isArray(obj[key]) && obj[key].length > 0) {
        return obj[key][0];
    }
    return undefined;
}
let obj = {
    key: [1,2,3],

};
let result = getFirstElementOfProperty(obj, "key");
console.log(result);