// write a program to determine a student's grade
  // based on the average of 3 scores from the user

/*
If the average score is greater than or equal to 90 then the grade is 'A'
If the average score is greater than or equal to 70 and less than 90 then the grade is 'B'
If the average score is greater than or equal to 50 and less than 70 then the grade is 'C'
If the average score is less than 50 then the grade is 'F'
*/

// Assume all input values are positive integers

let readlineSync = require('readline-sync');

function avgGrade(number = 3) {
  let grades = [];

  for (let i = 1; i <= number; i++) {
    let grade = Number(readlineSync.question(`Enter score ${i}: `));
    grades.push(grade);
  }

  let avg = grades.reduce((total, grade) => total + grade) / number;

  if (avg >= 90 ) {
    console.log(`Based on the average of your ${number} scores your letter grade is "A"`); 
  } else if (avg >= 70 && avg < 90) {
    console.log(`Based on the average of your ${number} scores your letter grade is "B"`);
  } else if (avg >= 50 && avg < 70) {
    console.log(`Based on the average of your ${number} scores your letter grade is "C"`);
  } else {
    console.log(`Based on the average of your ${number} scores your letter grade is "F"`);
  }
}
  
//  avgGrade();

// 90 
// 50 
// 78
// Based on the average of your 3 scores your letter grade is "B".

avgGrade(5);

// 95, 99, 100, 97, 92
// Based on the average of your 5 scores your letter grade is "A".