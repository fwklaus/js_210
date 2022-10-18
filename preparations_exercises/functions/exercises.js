let readlineSync = require('readline-sync');

/*
let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar); // 1

function getName(prompt) {
  let readlineSync = require('readline-sync');
  let name = readlineSync.question(prompt);
  return name;
}

let firstName = getName('What is your first name? ');
let lastName = getName('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);

function getNum (prompt) {
  return readlineSync.question(prompt)
}

function multiply () {
  firstNum = getNum("Enter the first number: ");
  secondNum = getNum("Enter the second number: ");
  console.log(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
}

multiply();
*/

function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee'); // outputs nothing

function scream(words) {
  return words + '!!!!';
}

scream('Yipeee'); // outputs nothing
