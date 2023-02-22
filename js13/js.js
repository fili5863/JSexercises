let cal = 0;

const animals = [
  { name: "Signe", type: "honeybadger" },
  { name: "John", type: "cat" },
  { name: "Frank", type: "cat" },
  { name: "Lone", type: "abe" },
  { name: "Gwelondyn", type: "dog" },
  { name: "Freddie", type: "dog" },
];

// names.forEach(printNames);

// function printNames(name, index, arr) {
//   if (index === 0) {
//     console.log("Array:", arr);
//   }
//   console.log(`${name} has index number ${index}`);
// }

// /* Filter */
// let shortNames = names.filter(removeLongNames);
// // Truthy or falsy. If the "name" returns undefined, it will be falsy
// function removeLongNames(name) {
//   return name.length <= 5;
// }

// console.log("Short names", shortNames);

console.log("animals", animals);

const cats = animals.filter(findCats);

function findCats(animal) {
  cal++;
  return animal.type === "cat";
}
console.log("filtered cats:", cats);

cats.sort(sortByName);

console.log("cats sorted:", cats);

console.log("filtered animals:", animals);

animals.sort(sortByName);

console.log("names sorted", animals);

function sortByName(animalA, animalB) {
  cal++;
  if (animalA.name < animalB.name) {
    return -1;
  } else if (animalB.name > animalA.name) {
    return 1;
  } else {
    return 0;
  }
}

console.log("calculations:", cal);

/* Anonymous function */

let button = document.querySelector(".button");

// button.addEventListener("click", btnClick);

// function btnClick(event) {
//   event.target.styles.backgroundColor = "red";
//   event.target.removeEventListener("click", btnClick);
// }

button.addEventListener("click", event => {
  event.target.styles.backgroundColor = "red";
  event.target.removeEventListener("click", btnClick);
});

// If you run a function inside another function, it keeps the reference alive like showing details about the student
function closureTest(num) {}
