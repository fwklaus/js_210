// compute greatest common divisor of two positive integers

// get a list of divisors for each argument


function gcd(number1, number2) {
  let num1Divs = getDivisors(number1);
  let num2Divs = getDivisors(number2);
  let longList;
  let shortList;

   if (num1Divs.length > num2Divs.length) {
    longList = num1Divs.reverse();
    shortList = num2Divs;
   } else {
    longList = num2Divs.reverse();
    shortList = num1Divs;
   }

   for (let i = 0; i < longList.length; i++) {
    for (let x = 0; x < shortList.length; x++) {
      if (longList[i] === shortList[x]) return longList[i]; 
    }
   }
}

function getDivisors(number) {
  let divisors = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) divisors.push(i);
  }

  return divisors;
}

console.log(gcd(12, 4));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));    // 1
