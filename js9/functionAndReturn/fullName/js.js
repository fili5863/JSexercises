"use strict";
const fullname = "Jachob Møllegård";

let firstName = fullname.substring(0, fullname.indexOf(" "));

let middleName = fullname.substring(fullname.indexOf(" ") + 1, fullname.lastIndexOf(" "));

let lastName = fullname.substring(fullname.lastIndexOf(" ") + 1);

fullName(lastName, firstName, middleName);

function fullName(lName, fName, mName) {
  if (mName === undefined) {
    return `${fName} ${lName}`;
  } else {
    return `${fName} ${mName} ${lName}`;
  }
}

let variable = fullName(`${firstName} ${middleName} ${lastName}`);

console.log(`${firstName} ${middleName} ${lastName}`);
