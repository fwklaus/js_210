// write a function names checkGoldbach
    // usese Goldbach's Conjecture to log every pair of primes
        // that sum to the number supplied as an argument
// takes an integer argument
    // expectedSum
// outputs all combinations of two prime numbers who sum to expectedSum
    // log from smallest to largest
// log null if expectedSum is odd or less than 4
// may call isPrime function from prime_check.js


// take integer argument
// validate argument with guard clause
  // return null if integer is odd or less than 4

// determine a list of prime numbers between 1 and the number
    // excluding 1 and the value 

// for each value in the primes array
    // check if another value in the array will add to the expected sum
    // if the values add to the sum
        // add the pair to an array

  


function checkGoldbach(expectedSum) {
  if (expectedSum < 4 || expectedSum % 2 !== 0) console.log(null);
  let primes = [];
  let pairs = [];

  for(let i = 2; i < expectedSum; i++) {
    if (isPrime(i)) primes.push(i);  
  }

  for(let x = 0; x < primes.length; x++) {
    if (primes[x] > expectedSum / 2) break; 
    for(let y = 0; y < primes.length; y++) {
    if((primes[x] + primes[y]) === expectedSum) {
        pairs.push([primes[x], primes[y]]);
      } 
    }
  }

  pairs.forEach(pair => console.log(pair.join(' ')));
}

function isPrime(number) {
  if (number === 1 || number === 0) return false;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false; 
  }
  return true;
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53