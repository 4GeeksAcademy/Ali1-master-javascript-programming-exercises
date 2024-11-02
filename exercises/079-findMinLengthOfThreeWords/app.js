// function findMinLengthOfThreeWordds(word1, word2, word3) {
//     const length1 = word1.length;
//     const length2 = word2.length;
//     const length3 = word3.length;

//     return Math.min(length1, length2, length3);
// }
// let result = findMinLengthOfThreeWordds("a", "be", "see") 
// console.log(result)
function findMinLengthOfThreeWords(word1, word2, word3) {
    // Store the lengths of the words in an array
    const lengths = [word1.length, word2.length, word3.length];
    
    // Initialize the minimum length to the first element in the array
    let minLength = lengths[0];
    
    // Iterate through the lengths array to find the minimum length
    for (let i = 1; i < lengths.length; i++) {
        if (lengths[i] < minLength) {
            minLength = lengths[i];
        }
    }
    
    return minLength;
}

// Example usage:
let result = findMinLengthOfThreeWords("a", "be", "see");
console.log(result); // --> 1