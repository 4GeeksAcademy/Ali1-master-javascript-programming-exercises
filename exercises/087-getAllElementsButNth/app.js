function getAllElementsButNth(array, n) {
    // your code here
const resultArray = [...array];


resultArray.splice(n, 1);
return resultArray;
}

let output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']
