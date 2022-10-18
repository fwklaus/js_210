// 1

/*
function average (a, b, c) {
  return (a + b + c)  / 3;
}
console.log(average(1, 2, 3)); // 2
*/

// 2

/*
function average (a, b, c) {
  return sum(a, b, c) / 3;
}

function sum (a, b, c) {
  return a + b + c
}

console.log(average(1, 2, 3)); // 2
*/

// 3

/*
function average (numbers) {
  let total = 0;
  for (let index = 0; index < numbers.length; index++) {
    total += numbers[index]
  }  

  return total / numbers.length;
}

let arr = [1, 2, 3, 4, 5];

console.log(average(arr)); // 3
*/

// 4

function average (numbers) {
  return sum(numbers) / numbers.length
}

function sum (numbers) {
  let total = 0;
  for (let index = 0; index < numbers.length; index++) {
    total += numbers[index]
  }  

  return total;
}

let arr = [1, 2, 3, 4, 5];
console.log(average(arr)); // 3

// 5

let temperatures = [85, 72, 42, 52, 99];

console.log(average(temperatures)); // 70