// write a password guessing program
// tracks how many times the user enters the wrong password
// if the user enters the wrong password three times
      // log 'You have been denied access'
          // end program
// if password is correct, log 'You have successfully logged in'
          // end program

let readlineSync = require('readline-sync');
password = 'password';

function authenticate() {
  let guesses = 3;
  let answer;

  while (guesses > 0) {
    answer = readlineSync.question('What is the password: ');
    
    if (answer === password) {
      console.log('You have successfully logged in.');
      break;
    } else if (guesses === 1) {
      console.log('You have been denied access');
    }
    guesses -= 1;
  }
}

authenticate();

