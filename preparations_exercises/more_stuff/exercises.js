// 1
let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);  // [1, 4, 3]

// 3
console.log(Math.sqrt(37)); // 6.082762530298219

// 4

function max (arr) {
  let max_val = -1;
  arr.forEach(function(el){
    if (el > max_val) {
      max_val = el;
    }
  });
  return max_val;
}

let list1 = [ 1, 6, 3, 2 ];
let list2 = [ -1, -6, -3, -2 ];
let list3 = [ 2, 2 ];

 console.log(max(list1)); // 6
 console.log(max(list2)); // -1 
 console.log(max(list3)); // 2

 // 6
 
 function allMatches(arr, pattern) {
   return arr.filter(str => str.match(pattern));
  }
  
  let words = [
    'laboratory',
    'experiment',
    'flab',
    'Pans Labyrinth',
    'elaborate',
    'polar bear',
];

console.log(allMatches(words, /lab/)) // => ['laboratory', 'flab', 'elaborate']


// 8
console.log('___________________');

function isNotANumber(val) {
  return value !== value;
}

// 9

function isNegativeZero(num){
  return (1/num === -Infinity)
}

console.log(isNegativeZero(-0)); // true
console.log(isNegativeZero(0)); // false
console.log(isNegativeZero(5)); // false
console.log(isNegativeZero(-4)); // falase
