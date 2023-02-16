"use strict";

const animals = [
  { name: "Hugo", type: "cat" },
  { name: "Petra", type: "cat" },

  { name: "Freddie", type: "dog" },
  { name: "Scooby", type: "dog" },
];

function isCat(animal) {
  console.log(animal.name);
  if (animal.type === "cat") {
    return true;
  } else {
    return false;
  }
}
function isDog(animal) {
  console.log(animal.name);
  if (animal.type === "dog") {
    return true;
  } else {
    return false;
  }
}

console.log(isCat(animals[2]));

function all(animal) {
  return true;
}
function none(animal) {
  return false;
}

animals.filter(all);

console.log("ALL", animals.filter(all));

const onlyCats = animals.filter(isCat);
const onlyDogs = animals.filter(isDog);

console.log("Only POOOOSI", onlyCats);
console.log("Only Dåg", onlyDogs);
