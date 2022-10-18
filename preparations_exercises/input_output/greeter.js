/* 
let name = 'Victor';

console.log(`Good Morning, ${name}.`);
console.log(`Good Afternoon, ${name}.`);
console.log(`Good Evening, ${name}.`); 
*/

let rlSync = require('readline-sync');
// let name = rlSync.question('What is your name? ');
// console.log(`Hello, ${name}!`);

let firstName = rlSync.question('What is your first name? ');
let lastName = rlSync.question('What is your last name? ');

console.log(`Hello, ${firstName} ${lastName}!`);

