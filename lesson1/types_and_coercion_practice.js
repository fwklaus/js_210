// 1

let x = '13';
let y = 9;

console.log(x + y); // '139'
console.log(Number(x) + y); // 22 

// 2

console.log(x * y); // will coerce the string to a number // 117

// 3

let npa = 212;
let xxx = 555;
let num = 1212; 

// console.log(npa.toString() + xxx.toString() + num.toString());
 // 2125551212

 // 4

 console.log(String(npa) + String(xxx) + String(num));

// 5
 
let bool = true;
let arr = [1, 2, 3];

console.log(bool.toString()); // 'true'
console.log(arr.toString()); // '1, 2, 3'
