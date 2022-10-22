// write a function that takes a number argument
    // returns true if number is prime
    // return false if not
// Assume the input is always a non-negative integer
// prime numbers are only divisible by 1 and itself
  // 1 is not a prime number

// return false if number is 1
// iterate from 2 to one less than number
   // return false if number is divisible by any number
   // return true otherwise


function isPrime(number) {
  if (number === 1 || number === 0) return false;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false; 
  }
  return true;
}

console.log(isPrime(1)); // false
console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(43)); // true
console.log(isPrime(55)); // false
console.log(isPrime(0)); // false
