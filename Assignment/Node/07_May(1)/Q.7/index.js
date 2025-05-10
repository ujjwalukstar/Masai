// index.js

// Import the crypto module to generate random numbers
const crypto = require('crypto');

// Retrieve the command line arguments passed to the script
const args = process.argv.slice(2);  // Skip the first two elements (node and script path)

// Extract the operation and numbers from the arguments
const operation = args[0];  // The first argument is the operation (add, sub, etc.)
const num1 = parseFloat(args[1]);  // The second argument is the first number
const num2 = parseFloat(args[2]);  // The third argument is the second number
const length = parseInt(args[1]); // Length for random number generation if the operation is 'random'

// Function to handle each operation
function calculate(operation, num1, num2, length) {
  switch (operation) {
    case 'add':
      // Addition
      if (!isNaN(num1) && !isNaN(num2)) {
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
      } else {
        console.log("Please provide valid numbers for addition.");
      }
      break;
      
    case 'sub':
      // Subtraction
      if (!isNaN(num1) && !isNaN(num2)) {
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
      } else {
        console.log("Please provide valid numbers for subtraction.");
      }
      break;

    case 'mult':
      // Multiplication
      if (!isNaN(num1) && !isNaN(num2)) {
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
      } else {
        console.log("Please provide valid numbers for multiplication.");
      }
      break;

    case 'divide':
      // Division with error handling for division by zero
      if (!isNaN(num1) && !isNaN(num2)) {
        if (num2 === 0) {
          console.log("Error: Division by zero is not allowed.");
        } else {
          console.log(`${num1} / ${num2} = ${num1 / num2}`);
        }
      } else {
        console.log("Please provide valid numbers for division.");
      }
      break;

    case 'sin':
      // Sine (trigonometric)
      if (!isNaN(num1)) {
        console.log(`sin(${num1}) = ${Math.sin(num1)}`);
      } else {
        console.log("Please provide a valid number for sine.");
      }
      break;

    case 'cos':
      // Cosine (trigonometric)
      if (!isNaN(num1)) {
        console.log(`cos(${num1}) = ${Math.cos(num1)}`);
      } else {
        console.log("Please provide a valid number for cosine.");
      }
      break;

    case 'tan':
      // Tangent (trigonometric)
      if (!isNaN(num1)) {
        console.log(`tan(${num1}) = ${Math.tan(num1)}`);
      } else {
        console.log("Please provide a valid number for tangent.");
      }
      break;

    case 'random':
      // Random number generation using crypto
      if (isNaN(length) || length <= 0) {
        console.log("Provide length for random number generation.");
      } else {
        // Generate random bytes of the specified length
        const randomBuffer = crypto.randomBytes(length);
        const randomNum = randomBuffer.toString('binary');
        console.log(`Random number of length ${length}: ${randomNum}`);
      }
      break;

    default:
      // If the operation is not recognized
      console.log("Invalid operation. Please use one of the following: add, sub, mult, divide, sin, cos, tan, random.");
      break;
  }
}

// Run the calculate function with the provided arguments
calculate(operation, num1, num2, length);