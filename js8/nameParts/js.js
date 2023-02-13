"use strict";

let theName = "Jachob Westh Møllegård";

capital(theName);

function capital(fullname) {
  let firstName = fullname.substring(0, fullname.indexOf(" "));

  let middleName = fullname.substring(fullname.indexOf(" ") + 1, fullname.lastIndexOf(" "));

  let lastName = fullname.substring(fullname.lastIndexOf(" ") + 1);
  console.log(firstName, middleName, lastName);
}
