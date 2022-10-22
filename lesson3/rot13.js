// rot13 
  // letter-substitution cipher
    // translates a String into a new String

// for each character in the original string:
  // if the character is a letter in the modern English alphabet
      // change it to the character 13 positions later
          // get the ASCII codes for letter characters
              // UPPERCASE
              // LOWERCASE
          // letter transformation preserves case
  // Don't modify characters that aren't letters

  // input: String
  // output: String transformed by rot13

  // * rot13 applied twice results in original string
      // 2 sets of of 13 - 26 characters in modern English alphabet

// Create array for uppercase alphanumeric ASCII values
// create array for lowercase alphanumeric ASCII values


// iterate over each character in the string
// transorm the character
  // get the character at the current index
  // check that the number is in range
      // if so, transform character to ASCII - charCodeAt()
      // if value is within 13 of the end of the array
        // get index of current character in array
        // get last index 
          // subtract last index from current index
              // gives us start index 


// if the character is not in either range in terms of ASCII, don't transform it
    // check if either array includes characters ASCII value


// const upperCaseASCII = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];

// const lowerCaseASCII = [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122];

const UPPERCASE = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const LOWERCASE = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const UPPER_CASE_ASCII_MIDPOINT = 78;
const LOWER_CASE_ASCII_MIDPOINT = 110;
const ALPHABET_LAST_INDEX = 25;
const ROTATION = 13;

function rot13(string) {
  let stringArr = [];

  for (let i = 0; i < string.length; i++) {
    let currCharASCII = string[i].charCodeAt();
    let currChar = string[i];
    let currCharIndex;
    let overflowIndex;

    if (UPPERCASE.includes(currChar) && currCharASCII >= UPPER_CASE_ASCII_MIDPOINT) { 
      currCharIndex = UPPERCASE.indexOf(currChar); 
      overflowIndex = (ROTATION - 1) - (ALPHABET_LAST_INDEX - currCharIndex);
      currChar = UPPERCASE[overflowIndex];
    } else if (LOWERCASE.includes(currChar) && currCharASCII >= LOWER_CASE_ASCII_MIDPOINT) { 
      currCharIndex = LOWERCASE.indexOf(currChar);
      overflowIndex = (ROTATION - 1) - (ALPHABET_LAST_INDEX - currCharIndex);
      currChar = LOWERCASE[overflowIndex];
    } else if (UPPERCASE.includes(currChar)) {
      currCharIndex = UPPERCASE.indexOf(currChar);
      currChar = UPPERCASE[currCharIndex + ROTATION];
    } else if (LOWERCASE.includes(currChar)) {
      currCharIndex = LOWERCASE.indexOf(currChar)
      currChar = LOWERCASE[currCharIndex + ROTATION];
    }

    stringArr.push(currChar)
  }

  return stringArr.join('');
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
// Teachers open the door, but you must enter by yourself.
