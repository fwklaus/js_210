// takes two arguments: array, object
    // aray will contain two or more elements
      // when combined produce a person's full name
    // object will contain two keys
      // title and occupation with values
// log greeing to the console:
  // uses full name, and mentions the person's title and occupation

function greetings(array, object) {
  console.log(`Hello ${array.join(' ')}! Nice to have a ${object.title} ${object.occupation} around.`);
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// console output
// Hello, John Q Doe! Nice to have a Master Plumber around.

