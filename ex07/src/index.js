function main(numOne, numTwo) {
    //Only change code below this line
    var remainder;
    remainder = numOne % numTwo;
    //Only change code above this line
    console.log(remainder);
    return remainder;
}

console.log(main(5, 2));
console.log(main(55, 4));
console.log(main(102, 25));

module.exports = main;