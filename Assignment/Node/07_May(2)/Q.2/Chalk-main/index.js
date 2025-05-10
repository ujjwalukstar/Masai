// index.js
const chalk = require('chalk');

// Simple colored text
console.log(chalk.blue('Hello, World!'));
console.log(chalk.yellow('Learning Chalk is fun!'));

// Background colors
console.log(chalk.black.bgYellow('Warning! Proceed with caution.'));
console.log(chalk.white.bgRed('Error! Something went wrong.'));

// Multiple colors in a message
console.log(chalk.green('Success:') + chalk.white(' Operation completed!'));
console.log(chalk.cyan('Loading...') + chalk.magenta(' Please wait'));

// Custom styles (themes)
const error = chalk.bold.red;
const warning = chalk.bold.hex('#FFA500'); // Orange using HEX
const success = chalk.bold.green;

// Themed messages
console.log(error('Error: Unable to connect to the server!'));
console.log(warning('Warning: Low disk space!'));
console.log(success('Success: Data saved successfully!'));

// 🔥 Bonus styles
console.log(chalk.underline.bgHex('#222222').white('This is underlined white text on dark gray.'));
console.log(chalk.strikethrough.red('This operation is deprecated.'));
console.log(chalk.rgb(123, 45, 67).italic('This is italic text in a custom RGB color.'));
