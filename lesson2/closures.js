
// example
function foo() {
  let name = "Pete";
  return function() {
    console.log(name);
  };
}

let printPete = foo();
printPete(); // Pete



// a too simple example that may be more illustrative of scope, while it does, in fact, illustrate closures
let counter = 0;

function incrementCounter() {
  counter += 1;
}

incrementCounter();
incrementCounter();
console.log(counter); // 2


// returning a function is a powerful feature of closure in JS
function makeCounter() {
  let counter = 0;

  return function() {
    counter += 1;
    return counter;
  }
}

let incrementCounter = makeCounter();
console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 2

// having multiple copies of the same closure will result in each copy having independent values

// having multiple functions close over the same variable will result in the functions sharing the same variable. Some action on the value created by one function will affect the value referenced by the other function as well


// Partial Function Application
// practical application of closures


function add(first, second) {
  return first + second;
}

function makeAdder(firstNumber) {
  return function(secondNumber) {
    return add(firstNumber, secondNumber);
  };
}

let addFive = makeAdder(5);
let addTen = makeAdder(10);

console.log(addFive(3));  // 8
console.log(addFive(55)); // 60
console.log(addTen(3));   // 13
console.log(addTen(55));  // 65


// example
// the initial call does not provide enough arguments to call `console.log`
function makeLogger(identifier) {
  return function(msg) {
    console.log(identifier, msg);
  };
}