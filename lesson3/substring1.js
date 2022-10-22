// write a function that returns a substring of a string based on a starting index and length

// input: string, integer(start index), integer(length)
// output: substring of string

// reqs:
  // starting index:
    //  if negativem substract from length of string
  // length 
    // max length of the desired substring
    // use the available characters if max length exceeds the number of remainging characters
  // return substring
    
  // if length is negative or 0, return empty string
  
  // may use:
      // square brackets to access character by index
      // length property

  // may not use:
    // any other properties or methods from JS'sbuilt in String class


// data/alg:
  //take arguments
    // validate the length
    // create variable to store return string
    // get the length of the string
    // if the start argument is negative, set start to length minus start

  // iterate over the string
    // break out of loop if length is 0 
    // if the current index matches the starting index, add the value from string to the return string
    // decrement the value of length

  // return the return string

function substr(string, start, length) {
  if (length <= 0) return('');
  let returnString = '';
  let stringLength = string.length;

  if (start < 0) start = stringLength + start; 

  for (let i = 0; i < stringLength; i++) {
    if (length === 0) break;
    if (i >= start) {
      returnString += string[i];
      length -= 1;
    }
  }
  return returnString;
}

let string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""
