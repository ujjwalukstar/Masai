// index.js

const randomWords = require('random-words');
const { checkPalindrome, countVowels } = require('./fun');

// Generate 5 random words
const words = randomWords(5);

words.forEach((word, index) => {
  const vowelsCount = countVowels(word);
  const isPalindrome = checkPalindrome(word);
  console.log(
    `word ${index + 1} -> ${word} -> vowelsCount: ${vowelsCount} -> isPalindrome: ${isPalindrome}`
  );
});
