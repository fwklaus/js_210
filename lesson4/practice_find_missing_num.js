// takes a sorted array of integers
// returns an array 
  // includes all the missing integers between the first and last elements of the argument

function missing(arr) {
  let missing = [];
  for (let i = arr[0]; i < arr[arr.length - 1]; i++) {
    if (arr.includes(i)) continue;
    missing.push(i);  
  }
  return missing;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []
