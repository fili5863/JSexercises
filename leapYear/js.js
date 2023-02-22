"use strict";

const year2020 = 2020;
const year2019 = 2019;
const year1900 = 1900;
const year2000 = 2000;

console.log(
  `2020 ${isLeapYear(year2020)},`,
  `2019 ${isLeapYear(year2019)},`,
  `1900 ${isLeapYear(year1900)},`,
  `2000 ${isLeapYear(year2000)}`
);

function isLeapYear(year) {
  let isLeapYear = false;
  if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
    isLeapYear = true;
  }
  return isLeapYear;
}
// function isLeapYear(year) {
//   let isLeapYear = false;
//   if (year % 4 === 0) {
//     if (year % 100 === 0) {
//       if (year % 400 === 0) {
//         isLeapYear = true;
//       }
//     } else {
//       isLeapYear = true;
//     }
//   }
//   return isLeapYear;
// }
