function isEitherEvenAndLessThan9(num1, num2) {
    // your code here
   const isEitherEven = (num1 % 2 === 0) || (num2 % 2 === 0);
   const areBothLessThan9 = (num1 < 9) && (num2 < 9);


   return isEitherEven && areBothLessThan9;
}
let output = isEitherEvenAndLessThan9(2, 4);
console.log(output); // --> true
