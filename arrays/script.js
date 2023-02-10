"use strict";

/* let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

let someLetter = letters[4];
let anotherLetter = letters[7];

console.log(letters[4]);

let newarr = letters;

newarr[4] = "*";

console.log(letters[4]);
console.log(letters[4]); */

/* const people = ["Harry", "Ron", "Hermione"];

let result;
// Tilføjer en værdi til array 
result = people.push("Draco");
// Fjerne the most recent push
result = people.pop();

result = people.push("Neville");

result = people.push("Luna");

result = people.slice(0, 3);

result = people.splice(1, 0, "Cho");

people[1] = "Ginny";

result = people.push("Fred", "George");

// Finder Fred i array
result = people.indexOf("Fred");

// tager result(Fred) og smider in i position 1 
result = people.splice(result, 1);

console.log(result);
console.log(people); */

const letters = Array.from("abcdefghijklmn");

console.log(letters);

// Definerer str
const str = "abcdefghijklmn";
//

// udskriver hele strengen i en position
const arr1 = str.split();
console.log(arr1);
//

// deler bogstaverne op i et array
const arr2 = Array.from(str);
console.log(arr2);
//

// de fungerer på samme måde, men join fjerner kommaerne, der blev tilføjet i arrayet, da det blev lavet
console.log(arr2.toString());
console.log(arr2.join(""));
//
