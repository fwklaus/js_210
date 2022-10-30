// takes a string
// returns an object containing the count of the repeated characters

function repeatedCharacters(string) {
  let count = {};
  let stringArr = string.toLowerCase().split('');
  let stringArrCopy = stringArr.slice();

  for (let i = 0; i < string.length; i++) {
    let currentChar = stringArr[i];
    let charCount = 0;

    stringArrCopy.forEach(function (char) {
      if (currentChar === char) {
        charCount += 1;
      }
     
    });

    stringArrCopy = stringArrCopy.filter(function(char) {
      return (char !== currentChar);
    });

    if (charCount >= 2) count[currentChar] = charCount;
  }

  return count;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }
