function filterEvenLengthWords(words) {
    // Use filter to return a new array with only even length words
    return words.filter(word => word.length % 2 === 0);
}

// Example usage
let output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']