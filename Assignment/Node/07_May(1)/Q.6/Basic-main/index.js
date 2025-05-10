// index.js
const sum = require("./sum");
const multiply = require("./multiplication");
const subtract = require("./subtraction");
const divide = require("./division");

let sumA = 3;
let sumB = 5;
let sumResult = sum(sumA, sumB);
console.log(`Sum of ${sumA} and ${sumB} is: ${sumResult}`);

let mulA = 4;
let mulB = 6;
let mulResult = multiply(mulA, mulB);
console.log(`Multiplication of ${mulA} and ${mulB} is: ${mulResult}`);

let subA = 9;
let subB = 4;
let subResult = subtract(subA, subB);
console.log(`Subtraction of ${subA} and ${subB} is: ${subResult}`);

let divA = 8;
let divB = 0;
let divResult = divide(divA, divB);
console.log(`Division of ${divA} by ${divB} is: ${divResult}`);
