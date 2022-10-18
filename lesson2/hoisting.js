// var statement

var foo;
var bar = 'qux';

// let is block scoped; var is function scoped 

function foo() {
    if (true) {
      var a = 1;
      let b = 2;
    }

    console.log(a); // 1
    console.log(b); // ReferenceError: b is not defined 
}

// foo();

// all declarations create variables that have either function scope or block scope


// before a program is execution, the JS engine locates all of the variable declarations in a program and "hoists" them to the top of their defined scopes

// this process is what allows us to invoke a function before its declaration

console.log(getName()); // Pete

function getName() {
  return "Pete";
}

// Effectively, the program is rearranged as follows, but hoisting does not actally change the program

/*
function getName() {
  return "Pete";
}

console.log(getName());
*/


// hoisted var variables are given an initial value of undefined

console.log(bar); // undefined
var bar = 3;
console.log(bar); // 3


// hoisted let and const variables are left "unset"
// "unset" variables are said to be in the Temporal Dead Zone(TDZ)

// console.log(foo2); // ReferenceError: Cannot access 'foo2' before initialization
let foo2;

// console.log(qux); // ReferenceError: Cannot access 'qux' before initialization
const qux = 42;

// different error code suggests JS is aware of the "unset" variables
// console.log(baz); // ReferenceError: baz is not defined


// function declarations are also hoisted and have function scope

console.log(hello()); // hello world

function hello() {
  return 'hello world';
}

// equivalent to the following

/*
  function hello() {
    return 'hello world';
  }

  console.log(hello());      // logs "hello world"
*/


// nested functions are hoisted as well // avoid nesting functions

function foo() {
  return bar();

  function bar() {
    return 42;
  }
}

// console.log(foo()); // 42


// function declarations are hoisted above variable declarations

bar2(); // undefined
var foo3 = 'hello'

function bar2() {
  console.log(foo3);
}
