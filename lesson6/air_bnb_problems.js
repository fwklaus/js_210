/*
// 1
// should use single quotes rather than double for strings
// let title = "The Three-Body Problem";
let title = 'The Three-Body Problem';

// 2
// should only initialize one variable per let declaration
// should use camelCase for identifiers

// let title = 'The Three-Body Problem',
//     author = 'Cixin Liu',
//     page_count = 400;


let title = 'The Three-Body Problem';
let author = 'Cixin Liu';
let pageCount = 400;

// 3
// should use strict equality

// let completed = lastPageRead == 400;
let completed = lastPageRead === 400;

// 4
// our code blocks for multi-line if statements should be wrapped in curly braces

// if (finishedBook())
//   console.log('You have finished reading this book');

if (finishedBook()) {
  console.log('You have finished reading this book');
}
*/

// 5
// there needs to be spaces between operators and their operands
// two space indenation
// use explicit type coercion
// avoid ++ and -- operators
// Use named function expressions instead of function declarations

// function read(pages) {
//   console.log('You started reading.');
//   for (let page=0; page<pages; page += 1) {
//           let message = 'You read page '+page;
//           console.log(message);
//   }
// }

// read(400);


let read = function read(pages) {
  console.log('You started reading.');
  for (let page = 0; page < pages; page += 1) {
    let message = 'You read page ' + String(page);
    console.log(message);
  }
}

read(400);
