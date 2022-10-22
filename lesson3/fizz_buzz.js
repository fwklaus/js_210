// write a function that iterates over integers from 1 to 100 (inclusive)
// multiples of three, log "Fizz"
// multiples of five, "log "Buzz"
// multiples of both, log "FizzBuzz"
// all other numbers, log the number


function fizzbuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0 ) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

fizzbuzz();
// console output
/*
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
*/
// … rest of output omitted for brevity