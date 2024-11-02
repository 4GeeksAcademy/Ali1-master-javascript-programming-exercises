function getLongestOfThreeWords(word1, word2, word3) {
    // Initialize the longest word with the first word
    let longestWord = word1;
    
    // Compare the second word with the current longest word
    if (word2.length > longestWord.length) {
        longestWord = word2;
    }
    
    // Compare the third word with the current longest word
    if (word3.length > longestWord.length) {
        longestWord = word3;
    }
    
    return longestWord;
}

// Example usage
let output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'