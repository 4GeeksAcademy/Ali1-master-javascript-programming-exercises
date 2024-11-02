// Write your function here
function keep(array, keeper) {
    return array.filter(item => item === keeper);
}
let result = keep([1,2,3,2,1],2);
console.log(result)