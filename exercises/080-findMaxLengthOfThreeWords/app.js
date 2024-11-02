
function findMaxLengthOfThreeWords(word1, word2, word3) {

    const length1 = word1.length;
    const length2 = word2.length;
    const length3 = word3.length;

    return Math.max(length1, length2, length3);
}
let result = findMaxLengthOfThreeWords("a", "be", "see");
console.log(result)
// function findMixLengthOfThreeWords(word1, word2, word3) {
//     const lengths = [word1.length, word2.length, word3.length];

//     let maxLength = lengths[0];

//     for(let i = 1; i < lengths.length; i += 1) {
//         if(lengths[i] > maxLength) {
//             maxLength = lengths[i];
//         }

//     }
//     return maxLength;
// }
// let result = findMixLengthOfThreeWords("a", "be", "see");
// console.log(result)