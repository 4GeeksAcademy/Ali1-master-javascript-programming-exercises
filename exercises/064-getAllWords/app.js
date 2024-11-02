function getAllWords(str) {
    // your code here
    if (str.trim() === '') {
        return [];
    }
    return str.trim().split(/\s+/);
}

let output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']