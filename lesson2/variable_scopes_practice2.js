// 1
/*
function say() {
  if (false) {
    var a = 'hello from inside a block';
  }

  console.log(a); 
}

say(); // undefined
*/

// 2
/*
function say() {
  if (false) {
    let a = 'hello from inside a block';
  }

  console.log(a);
}

say(); // ReferenceError: a is not defined
*/

// 3
/*
function hello() {
  a = 'hello';
  console.log(a);

  if (false) {
    var a = 'hello again';
  }
}

hello(); // hello
console.log(a); // ReferenceError: a is not defined
*/

// 4
/*
function hello() {
  a = 'hello';
  console.log(a);

  if (false) {
    let a = 'hello again';
  }
}

hello(); // hello
console.log(a); // hello
*/

// 5
/*
var a = 'hello';

for (var index = 0; index < 5; index += 1) {
  var a = index;
}

console.log(a); // 4
*/

// 6
/*
let a = 'hello';

for (let index = 0; index < 5; index += 1) {
  let a = index;
}

console.log(a); // hello
*/

// 7
/*
let a = 1;

function foo() {
  a = 2;
  let bar = function() {
    a = 3;
    return 4;
  };

  return bar();
}

console.log(foo()); // 4
console.log(a); // 1
*/

// 8
/*
var a = 'global';

function checkScope() {
  var a = 'local';
  const nested = function() { 
    var a = 'nested';
    let superNested = () => { 
      a = 'superNested';
      return a;
    };

    return superNested();
  };

  return nested();  
}

console.log(checkScope()); // superNested
console.log(a); // global
*/

// 9
/*
let a = 'outer';
let b = 'outer';

console.log(a); // outer
console.log(b); // outer
setScope(a);
console.log(a); // outer
console.log(b); // inner

function setScope(foo) {
  foo = 'inner';
  b = 'inner';
}
*/

// 10
/*
let total = 50;
let increment = 15;

function incrementBy(increment) {
  total += increment;
}

console.log(total); // 50
incrementBy(10); 
console.log(total); // 60
console.log(increment); // 15
// local variable increment shadows global variable increment
*/

// 11

let a = 'outer';

console.log(a); // outer
setScope();
console.log(a); // TypeError: setScope is not a function

var setScope = function () {
  a = 'inner';
};

// the variable declaration for SetScope is hoisted, so when we call setScope, it hasn't yet been initialized
// a function declaration on the other hand includes the function itself when the function is hoisted
