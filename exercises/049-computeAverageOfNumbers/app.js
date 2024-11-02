function computeAverageOfNumbers(numbers) {
    if(numbers.length === 0) {
return 0;
    }
    const sum = numbers.reduce((acc, num) => acc + num, 0);

    const average = sum / numbers.length; 
    return average;
}
let input = [1, 2, 3, 4, 5];
let output = computeAverageOfNumbers(input);
console.log(output)