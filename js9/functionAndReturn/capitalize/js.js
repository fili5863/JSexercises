"use strict";

const name = "pETer";
const cap = capitalize(name);
console.log(cap);

function capitalize(str) {
  return `${str.substring(0, 1).toUpperCase()}${str.substring(1).toLowerCase()}`;
}
