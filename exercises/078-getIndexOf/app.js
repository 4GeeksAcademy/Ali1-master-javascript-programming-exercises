function getIndexOf(char, str) {

    for (let i = 0; i < str.length; i += 1) {

        if(str[i] === char) {
            return i;
        }
    }
    return -1;
}
let result = getIndexOf("a", "I am a hacker");
console.log(result);