"use strict";
let fullname = "Jachob Møllegård";

let firstName = fullname.substring(0, fullname.indexOf(" "));

let middleName = fullname.substring(fullname.indexOf(" ") + 1, fullname.lastIndexOf(" "));

let lastName = fullname.substring(fullname.lastIndexOf(" ") + 1);
console.log(firstName, middleName, lastName);

fullName(lastName, firstName, middleName);

function fullName(lName, fName, mName) {
  if (mName === undefined) {
    console.log(fName, lName);
  } else {
    console.log(fName, mName, lName);
  }
}
