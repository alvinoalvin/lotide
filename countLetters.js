/*
 function returns an array of the unique chars in the string, and the number of times they occur
 @param toCount: the string in which we'd like to count the unique char occurences of.
 */
const countLetters = function(toCount) {
  let countObj = {};
  
  //goes through each char
  for (let letter of toCount) {
    // if char is not already a key
    if (!countObj[letter] && letter !== ' ') {
      // go through string and count chars
      countObj[letter] = 0;
      for (let character of toCount) {
        if (character === letter) {
          countObj[letter]++;
        }
      }
    }
  }
  return countObj;
};
module.exports = countLetters;
console.log(countLetters("hello this is a string"));