/*
let lastInArray = [1, 2, 3];
lastValue = lastInArray[lastInArray.length - 1];
console.log(lastValue);

let firstNames = ['Tom', 'Dick', 'Harry'];

function rollCall(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
}

rollCall(firstNames);


let arr = [1, 2, 3, 4, 5];

function reverseArray(array) {
  let newArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }

  return newArray;
}

console.log(reverseArray(arr));

*/

let arr = [1, 2, 'a', 'b', 7, '&'];

function conerceArrayElements(arr) {
  let returnString = '';
  for (let i = 0; i < arr.length; i++) {
    returnString += String(arr[i]);
  }

  return returnString;
}

console.log(conerceArrayElements(arr));