function main(numOne, numTwo) {
        //Only change code below this line

    var myQuotient;
    if (numTwo == 0) {
        quotient = 'Divide by 0! Cannot divide by zero!';
    } else {
        myQuotient = numOne / numTwo;
        //Only change code above this line
    }

    return myQuotient;
}

console.log(main(5.0, 2.0));
console.log(main(16.5, 5.5));
console.log(main(102.0, 25.5));

console.log(main(parseFloat(5.0), parseFloat(2.0)));
console.log(main(parseFloat(16.5), parseFloat(5.5)));
console.log(main(parseFloat(102.0), parseFloat(25.5)));

module.exports = main;