// let age = 20;

let rlSync = require('readline-sync');
let age = Number(rlSync.question('How old are you? '));

for (let i = 0; i <= 10; i++) {
  let add = i * 10;
  if (i === 0) {
    console.log(`You are ${age} years old.`);
  } else {
    console.log(`In ${add} years, you will be ${age + add} years old.`);
  }
}

// console.log(`You are ${age} years old.`);
// console.log(`In 10 years, you will be ${age + 10} years old.`);
// console.log(`In 20 years, you will be ${age + 20} years old.`);
// console.log(`In 30 years, you will be ${age + 30} years old.`);
// console.log(`In 40 years, you will be ${age + 40} years old.`);
