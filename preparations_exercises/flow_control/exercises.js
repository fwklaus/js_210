/*
function evenOrOdd (int) {
  let result = (int % 2) === 0 ? 'even' : 'odd';
  console.log(result);
}

evenOrOdd(2); // even
evenOrOdd(3); // odd
evenOrOdd(4); // even
evenOrOdd(8); // even
evenOrOdd(13); // odd
evenOrOdd(26); // even
*/

function evenOrOdd (int) {
  // validate the argument
  if (typeof(int) !== 'number') {
    console.log("Not a Number");
    return
  } else if(isNaN(int)) {
    console.log("Not a Number");
    return
  } else {
    let result = (int % 2) === 0 ? 'even' : 'odd';
    console.log(result);
  }
}


evenOrOdd(2); // even
evenOrOdd(3); // odd
evenOrOdd(4); // even
evenOrOdd(8); // even
evenOrOdd(13); // odd
evenOrOdd(26); // even
evenOrOdd(0); // even
evenOrOdd(); // Not a Number
evenOrOdd(NaN); // Not a Number
evenOrOdd(true); // Not a Number
evenOrOdd('odd'); // Not a Number


function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');


function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]); // Not Empty

function capitalize(str) {
  if (str.length > 10) {
    return str.toUpperCase();
  } else {
    return str
  }
}

let str = capitalize("Hello World");
console.log(str);

let str2 = capitalize("Hi");
console.log(str2);

function numberRange(num) {
  if (num >= 0 && num <= 50) {
    console.log(`${num} is between 0 and 50`);
  } else if (num >= 51 && num <= 100) {
    console.log(`${num} is between 51 and 100`);
  } else if (num > 100) {
    console.log(`${num} is greater than 100`);
  } else {
    console.log(`${num} is less than 0`);
  }
}


numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);
