// push
// append the second argument and return the length of the array
/*
let count = [0, 1, 2];

function push(array, value) {
  array[array.length] = value;
  return array.length;
}

console.log(push(count, 3)); // 4
console.log(count); // [ 0, 1, 2, 3 ]


// pop
// accepts an array argument
// remove the last element from the array and return it

let count = [1, 2, 3];

function pop(arr) {
  let popElement = arr[arr.length - 1];
  arr.length -= 1;
  return popElement;
}

console.log(pop(count));             // 3
console.log(count);                  // [ 1, 2 ]


// unshift
// accepts two args: array, and a value
// inset the value at the beginning of the array
// return the length of the array
// use a for loop 

// the elements must each be shifted one to the right
// when i is 0,
  // save the value at 0 to a temporary variable
  // save the value to array at 0
// when i is not 0
  // we have the value in temp from the previous index
    // we need to swap the value of the current index and the temp value
        // destructuring assignment

function unshift(array, value) {
  let arrayLength = array.length
  let temp;
  for (let i = 0; i <= arrayLength; i++) {
    if (i === 0) {
      temp = array[i];
      array[i] = value; 
    } else {
      [temp, array[i]] = [array[i] , temp];
    }
  }

  return array.length;
}

let count = [1, 2, 3];
console.log(unshift(count, 0));      // 4
console.log(count);                  // [ 0, 1, 2, 3 ]

*/


// shift
// accepts an array argument
// function removes first value from the beginning of the array and returns it

// 

function shift(array) {
  let firsValue = array[0];
  array.reverse();
  array.length = array.length - 1;
  array.reverse();
  return firsValue;
}

let count = [1, 2, 3];
console.log(shift(count));           // 1
console.log(count);                  // [ 2, 3 ]
