//takes two array arguments
// return boolean
    // true if the arrays contain the same values, false otherwise

// test with arrays containing number, string, and boolean values

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let equal = true;

  for (let i = 0; i <= arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return equal;
}

console.log(arraysEqual([1], [1]));                               // true
console.log(arraysEqual([1], [2]));                               // false
console.log(arraysEqual([1, 2], [1, 2, 3]));                      // false
console.log(arraysEqual([1, 'hi', true], [1, 'hi', true]));       // true
console.log(arraysEqual([1, 'hi', true], [1, 'hi', false]));      // false
console.log(arraysEqual([1, 'hi', true], [1, 'hello', true]));    // false
console.log(arraysEqual([1, 'hi', true], [2, 'hi', true]));       // false
