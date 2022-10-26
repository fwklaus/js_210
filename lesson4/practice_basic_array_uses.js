// may use array's index access ([]), the length property, and any array methods as needed
/*
// 1
function firstElementOf(arr) {
  return arr[0];
}

console.log(firstElementOf(['U', 'S', 'A'])); // 'U'

//2
function lastElementOf(arr) {
  return arr[arr.length - 1];
}

console.log(lastElementOf(['U', 'S', 'A']));  // returns "A"


// 3
// return element at given position
// accessing elements without explicitly defined elements returs undefined

function nthElementOf(arr, index) {
  return arr[index];
}

let digits = [4, 8, 15, 16, 23, 42];

console.log(nthElementOf(digits, 3));   // returns 16
console.log(nthElementOf(digits, 8));   // what does this return?
console.log(nthElementOf(digits, -1));  // what does this return?

// 4
// We can insert data at a negative index as all arrays are objects in JS
// the added elemetn becomes part of the array object, but us not considered one of the array elements
// the length property remains unchanged


// 5
// return an array containing the first n values in a new array

function firstNOf(arr, count) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < count) newArray.push(arr[i]);
  }

  return newArray;
}

let digits = [4, 8, 15, 16, 23, 42];
console.log(firstNOf(digits, 3));    // returns [4, 8, 15]

// 6
function lastNOf(arr, count) {
  return arr.slice(count);
}

let digits = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits, 3));    // returns [16, 23, 42]


// 7

function lastNOf(arr, count) {
  if(arr.length < count) {
    return arr.slice(0, arr.length);
  }
  
  return arr.slice(count);
}

let digits = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits, 10));    // returns [16, 23, 42]

*/

// 8
// return array with the first elemetn from array 1 and last element from array 2

function endsOf(beginningArr, endingArr) {
  return [beginningArr[0], endingArr[endingArr.length - 1]];
}

console.log(endsOf([4, 8, 15], [16, 23, 42]));  // returns [4, 42]