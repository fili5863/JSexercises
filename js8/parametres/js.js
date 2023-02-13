"use strict";

/* -------------------------------- Exercise 1a -------------------------------- */

// You can call the function before it's defined and it still works
/* sayHello("Sinead");

function sayHello(firstName) {
  console.log(`Hello ${firstName}`);
} */

/* -------------------------------- Exercise 1b -------------------------------- */

/* 1b.1 */
// You can still call the function with a variable instead
/* const myName = "Sinead";

sayHello(myName);

function sayHello(firstName) {
  console.log(`Hello ${firstName}`);
} */

/* 1b.2 */
// The function parameter overrules the variable outside of the the function
/* const myName = "Sinead";
const firstName = "Peter";

sayHello(myName);

function sayHello(firstName) {
  console.log(`Hello ${firstName}`);
} */

/* 1b.3 */
// If the function is called without a parameter, it returns undefined
/* const myName = "Sinead";
const firstName = "Peter";

sayHello();

function sayHello(firstName) {
  console.log(`Hello ${firstName}`);
} */

/* 1b.4 */
// The function works if you have defined the lastName in the parameter above and below
/* const myName = "Sinead";
const yeName = "Peter";

sayHello(myName, yeName);

function sayHello(firstName, lastName) {
  console.log(`Hello ${firstName} ${lastName}`);
} */

/* 1b.5 */
// It switches the two names because they are defined in the reverse order
/* const myName = "Sinead";
const yeName = "Peter";

sayHello(myName, yeName);

function sayHello(lastName, firstName) {
  console.log(`Hello ${firstName} ${lastName}`);
} */

/* -------------------------------- Exercise 2a -------------------------------- */
/* 
const myName = "Jachob";
const myPet = "cat";
const petName = "Rufus";

// the things inside these parathesis is called parameters
presentPet(myName, myPet, petName);

// the things inside these parathesis is called scopes and points at the parameters
function presentPet(firstName, animalType, animalName) {
  console.log(`My name is ${firstName}, I have a ${animalType} called ${animalName}`);
} */

/* -------------------------------- Exercise 2b -------------------------------- */

/* 2b.1 */
// It doesn't matter if the variables and the parametres/ scopes have the same name since they the parametres / scopes, doesn't exist outside of the function. But I could imagine that it's bad practice to give them the same name.
/* const firstName = "Jachob";
const animalType = "cat";
const animalName = "Rufus";

presentPet(firstName, animalType, animalName);

function presentPet(firstName, animalType, animalName) {
  console.log(`My name is ${firstName}, I have a ${animalType} called ${animalName}`);
} */

/* 2b.2 */
// I did that in exercise 2a and like mentioned above, it doesn't matter, but this seems like a better solution

/* const myName = "Jachob";
const myPet = "cat";
const petName = "Rufus";

presentPet(myName, myPet, petName);

function presentPet(firstName, animalType, animalName) {
  console.log(`My name is ${firstName}, I have a ${animalType} called ${animalName}`);
} */

/* 2b.3 */
// It still works
/* const myName = "Jachob";

presentPet(myName, "cat", "Rufus");

function presentPet(firstName, animalType, animalName) {
  console.log(`My name is ${firstName}, I have a ${animalType} called ${animalName}`);
} */

/* 2b.4 */
// This is exactly the same as in 1b.5, if you don't change the other variables

/* -------------------------------- More experiments -------------------------------- */

/* ex.1 */
// This does not work
/* function sayHello(firstName, lastName) {
  const firstName = "Freddie";
  console.log(`Hello ${firstName} ${lastName}`);
}

const myName = "Sinead";
const yeName = "Peter";

sayHello(myName, yeName); */

/* ex.2 */
// This works because the firstName doesn't point at the variable in the parameter
/* function sayHello(lastName) {
  const firstName = "Freddie";
  console.log(`Hello ${firstName} ${lastName}`);
}

const myName = "Sinead";
const yeName = "Peter";

sayHello(myName, yeName); */

/* ex.3 */
// I just did this in ex.2 but without the const and it does work

/* ex.4 */
//
