// write a function  that takes a string as an argument
// return the string stripped of white spaces from both ends
    // do not remove or alter internal spaces


// take a string as an argument
    // convert the string to an array
    // declare a variabe to construct the new string
    // declare a flag variable

    // declare a strip function
    // iterate over the string from the front
      // if the space is empty and the flag is false, skip iteration
        // when we encounter a character set the flag to true
        // when we encounter a space after the flag is true, we'll append all characters
    // join the array to a string, reverse and return it
    
    // pass the split string to the  strip function

    // after the second time, return the string

    // if the 


function trim(string) {
  let returnString = stripLeadSpace(string);
  returnString = stripTrailSpace(returnString);
  return returnString
}

function stripLeadSpace(string) {
  let retString = [];
  let copyMode = false;

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') copyMode = true;

    if (copyMode) retString.push(string[i]);
  }

  return retString.join('');
}

function stripTrailSpace(string) {
  let retString = [];
  let copyMode = false;

  for (let i = string.length -1; i >= 0; i--) {
    if (string[i] !== ' ') copyMode = true;

    if (copyMode) retString.push(string[i]);
  }

  return retString.reverse().join('');
}

console.log(trim(' abc ')); // "abc"
console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""