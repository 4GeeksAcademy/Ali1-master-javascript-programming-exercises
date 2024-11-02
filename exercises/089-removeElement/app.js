// Write your function here
function removeElement (array, discarder) {
    return array.filter(item => item !== discarder);



}
let output = removeElement([1,2,3,2,1], 2);
console.log(output)
