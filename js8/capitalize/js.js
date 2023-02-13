"use strict";

let theName = "jAcHoB";

capital(theName);

function capital(str) {
  console.log(`${str.substring(0, 1).toUpperCase()}${str.substring(1).toLowerCase()}`);
}
