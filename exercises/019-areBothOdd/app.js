function areBothOdd(num1, num2) {
    return (num1 % 2 !== 0) && (num2 % 2 !== 0);
}

// Example usage
let output = areBothOdd(1, 3);
console.log(output); // --> true

output = areBothOdd(2, 3);
console.log(output); // --> false

output = areBothOdd(1, 4);
console.log(output); // --> false

output = areBothOdd(2, 4);
console.log(output); // --> false

output = areBothOdd(6, 11);
console.log(output); // --> false
