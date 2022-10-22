// write a function that takes a positive integer as an argument
// log al the numbers from 1 to the passe in number (inclusive)
// all numbers should be logged on separate lines


function logOddNumbers(num) {
  for (let n = 1; n <= num; n++) {
    if (n % 2 === 0) continue;

    console.log(n);
  }
}

logOddNumbers(19);
/*
1
3
5
7
9
111
13
15
17
*/