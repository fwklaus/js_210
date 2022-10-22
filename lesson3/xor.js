// exclusive or: only one of two conditions can be true, otherwise false
// write function names isXor
    // takes two arguments
    // returns true if exactly one argument is truthy
    // returns false otherwise
// function should accept boolean values, and also any values which are evaulated based on their truthiness

function isXor(value1, value2) {
  return (!!(value1) !== !!(value2));
}

console.log(isXor(false, true));     // true
console.log(isXor(true, false));     // true
console.log(isXor(false, false));    // false
console.log(isXor(true, true));      // false


console.log(isXor(false, 3));        // true
console.log(isXor('a', undefined));  // true
console.log(isXor(null, ''));        // false
console.log(isXor('2', 23));         // false