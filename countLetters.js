/* Function that checks if 2 values */
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("PASSED! ", actual, "===", expected);
    return true;
  } else {
    console.log("Failed ", actual, "!==", expected);
    return false;
  }
};

/*
 function returns an array of the unique chars in the string, and the number of times they occur
 @param toCount: the string in which we'd like to count the unique char occurences of.
 */
const countLetters = function(toCount) {
  let countObj = {};
  
  //goes through each char
  for (let letter of toCount) {
    // if char is not already a key
    if (!countObj[letter]) {
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

console.log(countLetters("hello this is a string"));