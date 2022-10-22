// write two functions
    // each take two strings as arguments
      // indexOf:
          // searches for the first instance of a substring in first argument(firstString) that matches the string of the second argument(secondString)
             // return the index of the character when that substring begins
      // lastIndexOf
          // searches for the last instance of a substring in first argument (firstString) that  matches the string of the second argument(secondString)
             // returns the index of the character where that substring begins

      // both function return -1 if the first arg does not contain substring of the second argument

// characters are case sensitive
// may use the square brackets to access a character by index
// may use String.length property
// may not use any other properties or methods from JS's built in String class

// indexOf
// iterate over the firstString argument
// when we encounter a match between the first character of the second argument and a character in the first argument
    // slice the length of the second argument from the first argument
        // compare slice of first argument to the second argument
        // return the index where the match begins
    // if no matches, return -1

// lastIndexOf
// start at the end of the string
// iterate backwads
// same functionality as the first function

function indexOf(firstString, secondString) {
  let secondStrLength = secondString.length;

  for (let i = 0; i <= firstString.length; i++) {
    if (firstString[i] === secondString[0]) {
      let firstStrSlice = firstString.split('').slice(i, i + secondStrLength);
      if(firstStrSlice.join('') === secondString) {
        return i;
      }
    }
  }
  return -1;
}

function lastIndexOf(firstString, secondString) {
  let secondStrLength = secondString.length;
  let firstStringEnd = firstString.length - 1;

  for (let i = firstStringEnd; i > 0; i--) {
    if (firstString[i] === secondString[0]) {
      let firstStrSlice = firstString.split('').slice(i, i + secondStrLength);
      if(firstStrSlice.join('') === secondString) {
        return i;
      }
    }
  }
  return -1;
}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1
