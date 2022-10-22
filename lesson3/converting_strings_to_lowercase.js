// write a function that returns a string converted to lowercase

// input: integer (representing string characters ascii code)
// output: string

// reqs
  // takes a string argument
    // any length
  // convert string characters to lowercase
  // return lowercase string

  // may use
    // String.fromCharChode
    // Sting.charCodeAt

  // number strings are valid
      // return the number string 
  
  // to convert a string from uppercase to lowercase
    // get the ascii value for the number - String.prototype.charChodeAt()
    // add 32
    // convert the number back to string value - String.fromCharCodE()

  // how do we handle characters that are already lowercase?
    // if the + 32 operation yields a character that isn't alphabetical, return the original char

// data/alg:
  // create constant array with all alphabetic characters

  // take string as arument
  // validate string
      // if string is number return the string

  // iterate over the string
    // perform conversion for each character
    // check if character is already lowercase
      // if so, add charcter to reurn array
      // otherwise, perform conversion
  // return lowercase string


const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'z'];
    
function toLowerCase(string) {
  let returnStr = '';
  if (Number.isInteger(Number(string))) return string;
  
  for (let i = 0; i < string.length; i++) {
    if (lowercase.includes(string[i])) {
      returnStr += string[i];
    } else {
      let asciiNumeric = string[i].charCodeAt(0);
      asciiNumeric += 32;
      char = String.fromCharCode(asciiNumeric);
      returnStr += char
    }
  }

  return returnStr;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"

