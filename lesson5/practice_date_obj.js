/*
// 1
let today = Date();
console.log(today); // Sat Oct 29 2022 13:00:06 GMT-0600 (Mountain Daylight Time)
*/
// 2
let today = new Date();
// let dayOfWeek = today.getDay();
// console.log(`Today's day is ${dayOfWeek}`); // Today's day is 6


// 3
let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// console.log(`Today's day is ${daysOfWeek[dayOfWeek]}.`);

// 4
let dayOfMonth = today.getDate();
let dayOfWeek = daysOfWeek[today.getDay()];
// console.log(`Today's date is ${dayOfWeek}, the ${dayOfMonth}.`);

// 5
// takes day of month as numeric value
// returns the formatted day of month and suffix

// st, nd, rd, th

function dateSuffix(dayOfMonth) {
  let numbers = dayOfMonth % 100;
  if ([11, 12, 13].includes(numbers)) return 'th';
  
  let number = numbers % 10;
  if ([0,4,5,6,7,8,9].includes(number)) {
      return 'th';
    } else if (number === 1 ) {
      return 'st';
    } else if (number === 2) {
      return 'nd';
    } else if (number === 3) {
      return 'rd';
    }
}

let suffix = dateSuffix(dayOfMonth)
// console.log(`Today's date is ${dayOfWeek}, the ${dayOfMonth}${suffix}.`);
// Today's date is Sat, the 29th.


// 6

// let month = today.getMonth();
// console.log(`Today's date is ${dayOfWeek}, ${month} the ${dayOfMonth}${suffix}.`);

// 7

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

let month = months[today.getMonth()];
console.log(`Today's date is ${dayOfWeek}, ${month} the ${dayOfMonth}${suffix}.`);

// Today's date is Sat, Oct the 29th.
// 8

function formattedMonth(date) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let dayOfMonth = date.getDate();
  let month = months[date.getMonth()];
  let suffix = dateSuffix(dayOfMonth);

  return `${month} the ${dayOfMonth}${suffix}`;
}

function formattedDay(date) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[date.getDay()];
}

function formattedDate(date) {
  let day = formattedDay(date); 
  let month = formattedMonth(date);

  console.log(`Today's date is ${day}, ${month}.`)
}

console.log(formattedDate(today));

// 9

console.log(today.getFullYear());
console.log(today.getYear());  // deprecated - don't use

// 10

console.log(today.getTime());

// 11

// let tomorrow;
let tomorrow = new Date(today.getTime());
tomorrow.setDate(30);

console.log(formattedDate(tomorrow));

// 12

let nextWeek = new Date(today.getTime());
console.log(today === nextWeek); // false

// 13

console.log(today.toDateString() === nextWeek.toDateString()); // true

// 14

function formatTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  return `${addZero(hours)}:${addZero(minutes)}`;
}

function addZero(time) {
  let timeStr = String(time);

  return (timeStr.length < 2) ? '0' + timeStr : timeStr;  
}

console.log(formatTime(today)); // 14:42
console.log(formatTime(new Date(2013, 2, 1, 1, 8)));