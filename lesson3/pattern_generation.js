// write a function 
    // takes a number of rows as the argument nStars
      // logs a square of numbers and asterisks

// take integer as argument
// iterate from 1 to nStars
// on each iteration
    // output the number value of the current index
    // output the remaining characters from the curent index to the nStars as stars

// to get the number of stars    
    // subtract the current index from nStars
        // multiple the number by the star character
        // append the stars to the range of characters

function generatePattern(nStars) {
  let range = [];
  let stars = [];

  for (let i = 1; i <= nStars; i++) {
    // stars.push('*');
    if (i < 10) {
      stars.push('*');
    } else if (i >= 10) { 
      stars.push('**');
    } else if (i >= 100) {
      stars.push('***');
    }
  }

  for(let n = 1; n <= nStars; n++) {
    range.push(n);
    console.log(`${range.join('')}${stars.slice(n).join('')}`);
  }
}

generatePattern(7);

// console output
/*
1******
12*****
123****
1234***
12345**
123456*
1234567
*/