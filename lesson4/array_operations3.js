// slice
// accepts three arguments: array, start index, end index
// return a new array 
    // contains values from original array 
          // starting with value at starting index
          // includes all values up to, but not including end index
// do not modify original array
// do not use built in Array methods
/*

function slice(array, start, stop) {
  let retArray = [];
  let currentIdx = 0;
  for (let i = 0; i < array.length; i++) {
    if (i >= start && i < stop) {
      retArray[currentIdx] = array[i]
      currentIdx += 1;
    } 
  }

  return retArray;
}

console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]

// splice
// takes: array, start index, number of values to remove
// start at start index
// remove specified number of values

// return the removed values in a new Array
// function mutates original array

// as we iterate over the original array, we need to modify the original array while we populate the return array


// create a return array
// iterate over the array

function splice(array, begin, number) {
  let removed = [];
  for (let i = begin; i < array.length; i++) {
    if (i < (begin + number)) {
      removed.push(array[i]);
    }

    array[i] = array[i + number];
  }

  array.length = array.length - removed.length;
  return removed;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]

*/


// concat
// accepts two array arguments
// return a new array
    // contains the values from each of the original arrays

// nest the arrays in an array
// iterate over the arrays, add each element to the new array

function concat(arr1, arr2) {
  let newArr = [];
  let nestedArray = [arr1, arr2];

  for (let i = 0;; i++) {
    if (newArr.length >= arr1.length + arr2.length) break;
    let arr = nestedArray[i];

    for (let x = 0; x < arr.length; x++) {
      newArr.push(arr[x]);
    }
  }

  return newArr;
}

console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]


/*
// join
// two args: array, string
// coerce each value in the array to a string
// join the values together using the second argument as a seperator

// assume the seperator will always be passed
// you may call the String function on any JS value to get its String representation



function join(array, seperator) {
  let retString = '';
  
  for (let i = 0; i < array.length; i++) {
    let currentVal = array[i];
    if (i === array.length - 1) {
      retString += array[i];
    } else {
      retString += (currentVal + seperator);
    }
  }

  return retString;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'
*/