// 1

let array1 = [1, 2, undefined, 4];
console.log(array1.length); // 4

let array2 = [1];
console.log(array2.length); // 1

let array3 = [];
array3[-1] = [1];

console.log(array3.length); // 0
console.log(Object.keys(array3)); // [ '-1' ]


let array4 = [1, 2, 3, 4, 5];
array4.length = 3;

console.log(array4.length); // 3
console.log(array4); // [ 1, 2, 3 ]

let array5 = [];
array5[100] = 3;

console.log(array5.length); // 101
console.log(array5); // [ <100 empty spaces>, 3 ]

// 2

let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
myArray.forEach(function(ele){
  if (ele % 2 === 0) console.log(ele);
});

// 6, 4, 2, 4, 16, 0

// 3

let myArray2 = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
]

myArray2.forEach(function(arr){
  arr.forEach(function(ele){
    if (ele % 2 === 0) console.log(ele);
  });
});

// 6, 4, 2, 4, 16, 0

// 4

let myArray3 = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
]

let result = myArray3.map(function(ele) {
  return (ele % 2 === 0) ? 'even' : 'odd'; 
});

console.log(result);


// 5

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function findIntegers(arr) {
  return arr.filter(function(el) {
    if (Number.isInteger(el)) return el;
  });
}

let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]

// 6

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr) {
  let lengths = arr.map(function(el){
    return el.length
  });
  
  return lengths.filter(function(el) {
    if (el % 2 !== 0) return el;
  });
}

console.log(oddLengths(arr)); // => [ 1, 5, 3 ]


// 7


let array = [3, 5, 7];

function sumOfSquares(array) {
  return array.reduce((acc, el) => (el * el) + acc, 0);
}

console.log(sumOfSquares(array)); // => 83

// 8

let arr2 = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr2) {
  return arr2.reduce((arr, el) => {
    if (el.length % 2 === 1) {
      arr.push(el.length);
    }
    
    return arr;
  }, []);  
}

console.log(oddLengths(arr)); // => [1, 5, 3]

// 9 

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

console.log(numbers1.includes(3)); // true
console.log(numbers2.includes(3)); // false
console.log(numbers3.includes(3)); // false

// 10
console.log('____________________________________');

let arr3 = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

arr3[1][3] = 606;
console.log(arr3);
