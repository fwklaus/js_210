/*
// 1
// return new array with all values from argument with odd index

function oddElementsOf(arr) {
  let newArr = [];
  for (let i = 1; i < arr.length; i += 2) {
    newArr.push(arr[i]);
  }

  return newArr;
}

let digits = [4, 8, 15, 16, 23, 42];

console.log(oddElementsOf(digits));    // returns [8, 16, 42]


// 2
// takes an array
// returns a new array
// contains all args elemetns in their original order
      // followed by all the argument's elements in reverse order

function mirrorArray(array) {
  let newArray = [];
  let reversed = array.slice(0).reverse(); 

  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i]);
  }

  for (let x = 0; x < reversed.length; x++) {
    newArray.push(reversed[x]);
  }

  return newArray;
}

let array = [1, 2, 3];
console.log(mirrorArray(array)); // [1, 2, 3, 3, 2, 1]


// 3
// use the array sory method
// write a function that takes an array
// return new array of the numbers sorted in descending order
// do not alter original array


function sortDescending(arr) {
  let newArr = arr.slice().sort(function compareFn(a, b) {
    if (Number(a) < Number(b)) {
      return 1;
    } else if (Number(a) > Number(b)) {
      return -1;
    } else {
      return 0;
    }
  });
  return newArr;
}

let array = [23, 4, 16, 42, 8, 15];
let result = sortDescending(array);  // returns [42, 23, 16, 15, 8, 4]
console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]

// 4
// takes an array of arrays
// returns a new array that contains the sums of each of the sub-arrays

function matrixSums(arr) {
  let retArr = [];
  arr.forEach(function(sub) {
    let total = 0;
    for (let i = 0; i < sub.length; i++) {
      total += sub[i]
    }
    retArr.push(total);
  });

  return retArr;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]

*/

// 5
// takes an array
// returns a new array
    // duplicate elements removed

function uniqueElements(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr.includes(arr[i])) continue;
    newArr.push(arr[i]);
  }
  return newArr;
}
    
console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]
