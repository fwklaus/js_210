// write a function that takes two arguments
    // string to be split
    // a delimiter character
// output the split strings to the console
// may not use built-in methods for String

// declare an empty array to store the split strings
// declare an empty array for the subStrings
// iterate over the string
    // for each character, check for a delimiter
      // if the character does not match
          // add the current character to the subString array  
      // if the character matches
          // push the array to the outer array
          // reassign the substring array to an empty array

function splitString(string, delimiter) {
  let delim = false;
  let splits = [];
  let subs = [];
  if (delimiter === undefined) {
     console.log('ERROR: No delimeter')
  } else {
    for (let i = 0; i < string.length; i++) {
      
      if (delimiter === '') { 
        delim = true;
        splits.push(string[i]);
      } else if (string[i] !== delimiter) {
        subs.push(string[i]);
      } else {
        splits.push(subs);
        subs = []
      }
    }
    
    if (subs.length === 0 && delim) {
      splits.forEach(char => console.log(char));
    } else {
      splits.push(subs);
      splits.forEach(arr => console.log(arr.join('')));
    }
  }
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello