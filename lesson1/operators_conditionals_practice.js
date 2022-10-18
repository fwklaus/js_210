// 1

let apples  = 3;
let bananas = 5;

if (apples == bananas) console.log(true);


// 2 

bananas = '3';

if (apples == bananas) console.log(true);

// 3
// `===` performs strict equality - no implicit type coercion
if (apples === bananas) console.log(true);

// 4

if (apples == bananas) {
  console.log('sort of equal');
} else if (apples === bananas) {
  console.log('equal')
}  else {
  console.log('not equal');
}

// 5

if (apples === bananas) {
  console.log('Strictly Equal');
} else if (apples == bananas) {
  console.log('Same number, but different types')
}  else {
  console.log('not equal');
}

// 6

if (apples === bananas) {
  console.log('Strictly Equal');
} else {
  if (apples == bananas) {
    console.log('Same number, but diffferent types');
  } else {
    console.log('not equal');
  }
}

// 7

apples = 3;
bananas = 3;

let areEqual = apples === bananas;
console.log(areEqual);

// 8

apples = 3;
bananas = undefined;

let eitherOr = (apples || bananas);
console.log(eitherOr); // 3

// 9

bananas = 1;
eitherOr = apples || bananas;
console.log(eitherOr); // 3

eitherOr = bananas || apples;
console.log(eitherOr) // 1

// 10

let lastName;
let familyMessage;

lastName = 'Klausmeier';

familyMessage = lastName === 'Klausmeier' ? "You're part of the family" : "You're not family";

console.log(familyMessage); // You're part of the family