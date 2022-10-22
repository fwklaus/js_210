const UPPERCASE_ASCII_MID = 78;
const LOWERCASE_ASCII_MID = 110;
const ALPHABET_LENGTH = 26;
const ROTATION = 13;

function rot13(string) {
  let stringArr = [];

  string.split('').forEach(function(char){
    let currCharASCII = char.charCodeAt();
    let overflowASCII;

    if (char.match(/[A-Z]/) && currCharASCII >= UPPERCASE_ASCII_MID) { 
      overflowASCII = (currCharASCII - ALPHABET_LENGTH) + ROTATION;
        char = String.fromCharCode(overflowASCII);
      } else if (char.match(/[a-z]/) && currCharASCII >= LOWERCASE_ASCII_MID) { 
        overflowASCII = (currCharASCII - ALPHABET_LENGTH) + ROTATION;
        char = String.fromCharCode(overflowASCII);
      } else if (char.match(/[A-Za-z]/)) { 
        char = String.fromCharCode(currCharASCII + ROTATION);
      }

    stringArr.push(char)
    });
  
  return stringArr.join('');
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
// Teachers open the door, but you must enter by yourself.


