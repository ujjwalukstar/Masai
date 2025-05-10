// fun.js

function checkPalindrome(word) {
  const reversed = word.split('').reverse().join('');
  return word.toLowerCase() === reversed.toLowerCase();
}

function countVowels(word) {
  const vowels = word.match(/[aeiou]/gi);
  return vowels ? vowels.length : 0;
}

module.exports = {
  checkPalindrome,
  countVowels
};
