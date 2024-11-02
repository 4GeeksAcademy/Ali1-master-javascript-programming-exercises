function isEitherEvenOrAreBoth7(num1, num2) {
    // your code he 
    if (num1 % 2 === 0  || num2 % 2 === 0) {
        return true;
    }
    if (num1 === 7 && num2 === 7) {
        return true;
    }
    return false;
    }
    let output = isEitherEvenOrAreBoth7(2, 3);
    console.log(output);