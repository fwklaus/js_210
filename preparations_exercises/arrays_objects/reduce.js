// takes two arguments:
  // callback function
  // value that initializes the accumulator

let arr = [2, 3, 5, 7]
arr.reduce((accumulator, element) => accumulator + element, 0)
// 17

arr.reduce((accumulator, element) => accumulator * element, 1)
// 210


let strings = ['a', 'b', 'c', 'd']
strings.reduce((accumulator, element) => {
  return accumulator + element.toUpperCase()
 }, '');
// 'ABCD'