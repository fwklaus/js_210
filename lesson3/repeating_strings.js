// input: string, number
// output: string or undefined

// reqs:
  // takes a string arg
  // takes a number
        // multiply string arg by number arg
  // if times arg is not a number, or it is a negtive number
        // return undefined      
  // if it is 0, return an empty string
  
  // assume times will always be an integer

  // you may concatenate strings, but do nos use any other built-in strings or properties of the String class

  // create an empty array
  // validate the times argument
  // iterate the number of times specified by times
  // for each itertion add the argument to the array
  // after iteration join the array and return it

  function repeat(string, times) {
    let retArray = [];
    if (times === 0) {
      return '';
    } else if (times < 0 || typeof(times) !== 'number' ) {
      return undefined;
    } else {
      while (times > 0) {
        retArray.push(string);
        times -= 1;
      }
    }

    return(retArray.join(''));
  }

console.log(repeat('abc', 1));       // "abc"
console.log(repeat('abc', 2));       // "abcabc"
console.log(repeat('abc', -1));      // undefined
console.log(repeat('abc', 0));       // ""
console.log(repeat('abc', 'a'));     // undefined
console.log(repeat('abc', false));   // undefined
console.log(repeat('abc', null));    // undefined
console.log(repeat('abc', '  '));    // undefined
  