"use strict";

const people = ["Harry", "Ron", "Hermione", "Neville"];

// function sayHello(person) {
//   console.log(`Hello ${person}`);
// }
// people.forEach(sayHello);

// people.forEach(person => console.log(`${person} says ya fookin mum ye`));

people.forEach(testParams);

function testParams(a, b, c, d) {
  console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}`);
}
