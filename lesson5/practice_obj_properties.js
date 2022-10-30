// 1
// return true if the object contains a property with the name given by the String, false otherwise
/*
function objectHasProperty(object, string) {
  return Object.keys(object).includes(string);
}

let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

console.log(objectHasProperty(pets, 'dog'));       // true
console.log(objectHasProperty(pets, 'lizard'));    // false
console.log(objectHasProperty(pets, 'mice'));      // true

// 2
// takes an object and a string
// if object contains property named by string
  // function should increment the value of the property
// if property does not exist
  // add property with a value of 1
  // return new value of the property

function incrementProperty(object, string) {
  debugger;
  if(object[string]) {
    object[string] += 1;
  } else {
    object[string] = 1;
  }
  return object[string];
}

let wins = {
  steve: 3,
  susie: 4,
};

console.log(incrementProperty(wins, 'susie'));   // 5
console.log(wins);                               // { steve: 3, susie: 5 }
console.log(incrementProperty(wins, 'lucy'));    // 1
console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }

// 3
// takes two objects as arguments
// copy all properties from the first object to the second
// return the number of propeties copied

// get the length of the object copy object
// copy all properties from the object to copy
// get the lenght of the copy object, and return the value

function copyProperties(objToCopy, copyObj) {
  let initLength = Object.values(copyObj).length

  for (property in objToCopy) {
    copyObj[property] = objToCopy[property];
  }

  return Object.values(copyObj).length  - initLength;
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }
*/

// 4
// takes a string argument
// return an object
  // contains the count of each word in the string
  // use words as keys, and counts as values

 // split string to array
 // declare an empty object
 // iterate over the array
    //for each word, set a property for the object 

function wordCount(string) {
  let obj = {};
  let strArray = string.split(' ');

  strArray.forEach(word => obj[word] = countOccurrences(strArray, word));
  return obj;
}

function countOccurrences(array, word) {
  let count = 0;
  array.forEach(function(wrd) {
    if (wrd === word) count += 1;
  });
  return count;
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }
