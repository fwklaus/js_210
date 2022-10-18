let readlineSync = require('readline-sync');

let answer;
do {
  // answer = prompt("Do you want to do that again?");
  answer = readlineSync.question("Do you want to do that again? ");
} while (answer === 'y');