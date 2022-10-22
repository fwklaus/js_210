// write a function that logs the integers from 1 to 100(inclusive)
    //numbers that are multiples of either 3 or 5
    // if the number is a multiple of both 3 and 5, append an '!' to number


function multiplesOfThreeAndFive() {
  for (let n = 1; n <= 100; n++) {
    if (n % 3 === 0 && n % 5 === 0) {
      console.log(String((n)) + '!'); 
    } else if (n % 3 === 0 || n % 5 === 0) {
      console.log(String(n));
    }
  }
}

multiplesOfThreeAndFive();

// output on console
/*
'3'
'5'
'6'
'9'
'10'
'12'
'15!'
*/
// … remainder of output omitted for brevity
