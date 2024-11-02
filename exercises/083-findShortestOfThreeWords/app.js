function findShortestOfThreeWords(word1, word2, word3) {
    // Initialize the shortest word with the first word
    let shortestWord = word1;
    
    // Compare the second word with the current shortest word
    if (word2.length < shortestWord.length) {
        shortestWord = word2;
    }
    
    // Compare the third word with the current shortest word
    if (word3.length < shortestWord.length) {
        shortestWord = word3;
    }
    
    return shortestWord;
}

// Example usage
let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'