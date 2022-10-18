// 1
/*
let a = 'outer';

function testScope() {
  let a = 'inner';
  console.log(a);
}

console.log(a); // outer
testScope(); // inner
console.log(a); // outer
*/

// 2
/*
let a = 'outer';

function testScope() {
  a = 'inner';
  console.log(a);
}

console.log(a); // outer
testScope(); // inner
console.log(a); // inner
*/

// 3
/*
let basket = 'empty';

function goShopping() {
  function shop1() {
    basket = 'tv';
  }

  console.log(basket); // empty

  let shop2 = function() {
    basket = 'computer';
  };

  const shop3 = () => {
    let basket = 'play station';
    console.log(basket);
  };

  shop1(); 
  shop2();
  shop3(); // play station

  console.log(basket); // computer
}

goShopping();
*/

// 4
/*
function hello() {
  a = 'hi';
}

hello();
console.log(a); // hi
*/

// 5
/*
function hello() {
  let a = 'hello';
}

hello();
console.log(a); // ReferenceError: a is not defined
*/

// 6
/*
console.log(a); // undefined

var a = 1; // varibles declared with the var keyword are hoisted and set to undefined
*/

// 7
/*
console.log(a); // cannot access 'a' before initialization 

let a = 1; // variables declared with the let keyword, when hoisted, are set to "unset", and exist in the Temporal Dead Zone. They cannot be accessed
*/

// 8

console.log(a); // ReferenceError: a is not defined

function hello() {
  a = 1;
}