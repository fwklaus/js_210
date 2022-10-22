// write a function logMultiples
  // takes one argument `number`
  // should log all multiples of the argument between 0 and 100 (inclusive) that are also odd numbers
    // log the values in descending order
// assume the `number` is an integer between 0 and 100

function logMultiples(number) {
  for (let n = 100; n >= 0; n--) {
    if (n % number === 0 && n % 2 === 1) {
      console.log(n);
    }
  }
}

logMultiples(17);
// output (5x, 3x and 1x)
/*
85
51
17
*/

logMultiples(21);
// output (3x and 1x)
/*
63
21
*/