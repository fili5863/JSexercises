"use strict";

// function greeting(firstName) {
//   return `Hello ${firstName}`;
// }

// const sayHi = greeting;

// console.log(sayHi("Harry"));

// function congreet(firstName) {
//   console.log(`Hello ${firstName}`);
// }

// setTimeout(congreet, 1000, "Ron");

// const person3 = {
//   firstName: "Harry",
//   lastName: "Potter",
//   hired: false,
// };

// const person4 = {
//   firstName: "Fred",
//   lastName: "Weasley",
//   hired: false,
// };

// console.log(person3);

// function hire(person) {
//   person.hired = true;
// }
// function fire(person) {
//   person.hired = false;
// }

// function fireOrHire(action, person) {
//   action(person);
// }

// fireOrHire(hire, person3);
// fireOrHire(fire, person4);
// console.log(person3);
// console.log(person4);

init();

function init() {
  console.log("init");
  loadJSON("animals.json", prepareData);
}

function prepareData(data) {
  console.log("prepare data");

  console.table(data);
}

function loadJSON(url, callback) {
  fetch(url)
    .then(response => response.json())
    .then(jsonData => callback(jsonData));
}
/* Jen Erik */

dialog.closeButton.addEventListener("click", closeDiaglog);

function closeDiaglog() {
  dialog.classList.add("close-animation");
  dialog.addEventListener("animationend", dialogClosed);
}

function dialogClosed() {
  dialog.remove();
}
