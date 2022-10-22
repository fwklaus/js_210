// write function
    // determines whether a string begins with a given substring
    // returns boolean

// input: string, substring
// output: returns Boolean

// reqs:
  // takes two arguments
    // string
    // substring
        // check if string arg starts with substring
  // returns boolean
      // if string starts with substring

  // may use: 
    //square brackets to access a charcater by index
    //length property of String

  // may not use any other built-in properties//methods from String

  // if the substring is an empty string, return true
  // must compare the entire substring to the string
      // the entire substring must match


// iterate over the string
// return true if the substring is an empty string
// get the length of the substring 
// at each index, from 0 to the length of the substring
  // compare the string to the charcter in the substring
    // if all characters are equal
      // return true
    // otherwise
      // return false

function startsWith(string, searchString) {
  let searchStringLength = searchString.length;
  // if (searchString === '') return true;
  
  for (let i = 0; i < searchStringLength; i++) {
    if (string[i] !== searchString[i]) return false; 
  }

  return true;
}

let str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));             // false

let longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));      // false
