function convertDoubleSpaceToSingle(str) {
    // Split the string by double spaces and join by single space
    return str.split('  ').join(' ');
}

let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"