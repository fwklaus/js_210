// similar to last problem
    // however, both args are indices of a given string

// rules
/*
  -If both start and end are positive integers, start is less than end, and both are within the boundary of the string, 
    return the substring from the start index (inclusive), to the end index (NOT inclusive).
  -If the value of start is greater than end, swap the values of the two, then return the substring as described above.
  -If start is equal to end, return an empty string.
  -If end is omitted, the end variable inside the function is undefined. Return the substring starting at position start up through (and including) the end of the string.
  -If either start or end is less than 0 or NaN, treat it as 0.
  -If either start or end is greater than the length of the string, treat it as equal to the string length.
*/

function substring(string, start, end) {
  let strLength = string.length;
  let returnString = '';

  while (returnString.length === 0) {
    if (start === end) {
      return '';
    } else if (end === undefined) {
      end = strLength;
    } else if (start < 0 || Number.isNaN(start) || !Number.isInteger(start)) {
      start = 0;
    } else if (end < 0 || Number.isNaN(end) || !Number.isInteger(end)) {
      end = 0;
    } else if (start > strLength) {
      start = strLength
    } else if (end > strLength) {
      end = strLength;      
    } else if (start > end) {
      [start, end] = [end, start];
    } else {
      returnString = getSubstring(string, start, end);
    }
  }

  return returnString;
}

function getSubstring(string, start, end) {
  let subStrLength = end - start; 
  let returnString = [];
  for (let i = start; i < subStrLength + start; i++) {
    returnString.push(string[i]);
  }

  return returnString.join('');
}

let string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"