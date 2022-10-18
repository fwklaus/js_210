/*
for (initialization; condition; increment) {
  // loop body
}
*/

/*
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];
for (let index = 0; index < names.length; index += 1) {
  let upperCaseNames = names[index].toUpperCase();
  upperNames.push(upperCaseNames);
}

console.log(upperNames); // [ 'CHRIS', 'KEVIN', 'NAVEED', 'PETE', 'VICTOR' ]
*/

// continue

let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];

for (let index = 0; index < names.length; index += 1) {
  if (names[index] === 'Naveed') {
    continue;
  }

  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName)
}

console.log(upperNames); // [ 'CHRIS', 'KEVIN', 'PETE', 'VICTOR' ]