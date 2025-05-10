// read.js
const fs = require('fs');
const path = require('path');

// Function to read Data.txt
function readFile() {
  const filePath = path.join(__dirname, 'Data.txt');
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject('Error reading file');
      } else {
        resolve(data);
      }
    });
  });
}

module.exports = { readFile };
