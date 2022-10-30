// 1
// Use Math.PI property to create a function that coverts radians to degrees
/*
function radianConversion(radians) {
  return (radians * 180) / Math.PI; 
}

console.log(radianConversion(1)); // 57.2958

// 2
let negativeValue = -180;

console.log(Math.abs(negativeValue)); // 180

// 3
console.log(Math.sqrt(16777216)); // 4096

// 4
console.log(Math.pow(16, 6)); // 16777216

// 5
// round to 50 in each case using appropriate method

let a = 50.72;
let b = 49.2;
let c = 49.86;

console.log(Math.round(c)); // 50
console.log(Math.floor(a)); // 50
console.log(Math.ceil(b)); // 50
*/

// 6
// return a random number between the numbers (incclusive)
// handle event that the arguments are swapped, or that they are equal
// assume both values are provided

function random(min, max) {
  if (min > max) {
    [min, max] = [max, min];
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(random(1, 5)); 
console.log(random(5, 5));
console.log(random(4, 2));