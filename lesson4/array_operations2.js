// indexOf
// takes two arguments: array and a value
// return first index at which value can be found, or -1 if the value is not present
/*
function indexOf(array, searchVal) {
  let index = -1;
  for (let i = 0; i <= array.length; i++) {
    if (array[i] === searchVal) return i;
  }

  return index;
}

console.log(indexOf([1, 2, 3, 3], 3));         // 2
console.log(indexOf([1, 2, 3], 4));            // -1

*/

// lastIndexOf 
// accepts two arguments: an array and a value
// returns the last index at which the value can be found in the array, or -1 if the value is not present

function lastIndexOf(array, value) {
  for (let i = 1; i < array.length; i++) {
    let index = array.length - i;
    if (array[index] === value) return index;  
  }

  return -1;
}

console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
console.log(lastIndexOf([1, 2, 3], 4));        // -1