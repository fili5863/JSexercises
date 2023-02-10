"use strict";

let object = {
  firstName: "Peter",
  age: 43,
  student: false,
};

console.log(`${object.firstName} is ${object.age}.`);

let name = object["firstName"];

object["firstName"] = "Bob";

console.log(`${object["firstName"]} is ${object["age"]}.`);

/////////////////////////

let person1 = {
  firstName: "Peter",
  age: 43,
  student: false,
};

person1.lastName = "Tolstrup";

console.log(person1.lastName);

console.log(person1);

person1.lastName = undefined;

console.log("person1.lastName:", person1.lastName);

console.log("person1.middleName:", person1.middleName);

delete person1.lastName;

/* Forskellen er at undefine fjerner værdien, men stadigvæk beholder objektet, men delete fjerner objektet */

/////////////////////////

const person2 = {
  firstName: "Peter",
  age: 43,
  student: false,
};

console.log(person2);

person2.age++;

console.log(person2);

const person3 = {
  firstName: "Bob",
  age: 34,
  student: true,
};

/* Udkommenteret fordi den laver fejl */
/* person2 = person3; */

/* Du kan ikke give person2, person3s værdier i objektet fordi du ikke kan ændre på en const */

/////////////////////////

const person4 = person1;

person4.firstName = "Bob";

console.log(person1);

/* Denne const kopierer person1 og navngiver den person4 */

/////////////////////////

const student1 = {
  firstName: "Harry",
  lastName: "Potter",
};

const student2 = student1;

if (student1 === student2) {
  console.log("They are the same!");
} else {
  console.log("They are not the same!");
}

///////////////////////////

const student3 = {
  firstName: "Harry",
  lastName: "Potter",
};

const student4 = {
  firstName: "Harry",
  lastName: "Potter",
};

if (student3 === student4) {
  console.log("They are the same!");
} else {
  console.log("They are not the same!");
}

/* Det er ikke den samme fordi, det er to forskellige const, hvor imod den forrige const er lig med den anden */

////////////////////////////

student3.firstName = student4.firstName;
student3.lastName = student4.lastName;

/* Den vil altid return som false, uanset om dataen er den samme, hvis ikke den peger mod det samme object */
