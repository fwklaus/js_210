// can invoke a function before declaring it
/*
greetPeople();

function greetPeople() {
  console.log("Good Morning!");
}

// function expression
let greetPeople = function () {
  console.log("Good Morning!");
}

greetPeople();


// arrow function

let greetPeople = () => console.log("Good Morning!");
greetPeople();
*/


/*
function add(a, b) {
  return a + b;
}
*/  

// transates to the following
let add = (a, b) => a + b;
let getNumber = (text) => {
  let input = prompt(text);
  return Number(input);
}

let number1 = getNumber("Enter a number: ");
let number2 = getNumber("Enter another number: ");
console.log(add(number1, number2));
