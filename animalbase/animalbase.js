"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];
let oldElement;

// The prototype for all animals:
const Animal = {
  name: "",
  desc: "-unknown animal-",
  type: "",
  age: 0,
};
// makes global value
const settings = {
  filter: "all",
  sortBy: "name",
  sortDir: "asc",
};

let filterBy = "all";

function start() {
  console.log("ready");

  // TODO: Add event-listeners to filter and sort buttons
  registerButtons();
  loadJSON();
}

// Adds event listeners to the sort and filter buttons
function registerButtons() {
  document
    .querySelectorAll("[data-action='filter']")
    .forEach(button => button.addEventListener("click", selectFilter));
  document
    .querySelectorAll("[data-action='sort']")
    .forEach(button => button.addEventListener("click", selectSort));
}

// Loads the data from the JSON file
async function loadJSON() {
  const response = await fetch("animals.json");
  const jsonData = await response.json();

  // when loaded, prepare data objects
  prepareObjects(jsonData);
}

function prepareObjects(jsonData) {
  allAnimals = jsonData.map(preapareObject);

  // TODO: This might not be the function we want to call first

  displayList(allAnimals);
}

function preapareObject(jsonObject) {
  const animal = Object.create(Animal);

  const texts = jsonObject.fullname.split(" ");
  animal.name = texts[0];
  animal.desc = texts[2];
  animal.type = texts[3];
  animal.age = jsonObject.age;

  return animal;
}
// Selects the filter you clicked on
function selectFilter(event) {
  const filter = event.target.dataset.filter;
  console.log(`User selected ${filter}`);
  setFilter(filter);
}
// Sets the filter
function setFilter(filter) {
  settings.filterBy = filter;
  buildList();
}
// Filters the list between animals
function filterList(filteredList) {
  // Runs the functions if the button is refering to cats or dogs
  if (settings.filterBy === "cat") {
    filteredList = allAnimals.filter(isCat);
  } else if (settings.filterBy === "dog") {
    filteredList = allAnimals.filter(isDog);
  }
  return filteredList;
}
// Filter only cats
function isCat(animal) {
  return animal.type === "cat";
}
// Filter only dogs
function isDog(animal) {
  return animal.type === "dog";
}
// Runs the function when you click on the sorting buttons
function selectSort(event) {
  // Adds a variable for the data-action
  const sortBy = event.target.dataset.sort;
  const sortDir = event.target.dataset.sortDirection;
  if (oldElement !== undefined) {
    oldElement.classList.remove("sortby");
  }
  oldElement = document.querySelector(`[data-sort='${sortBy}']`);

  event.target.classList.add("sortby");
  // toggles the sorting direction
  if (sortDir === "asc") {
    event.target.dataset.sortDirection = "desc";
  } else {
    event.target.dataset.sortDirection = "asc";
  }
  console.log(`User selected ${sortBy} - ${sortDir}`);
  setSort(sortBy, sortDir);
}
// Sets the sorting function
function setSort(sortBy, sortDir) {
  settings.sortBy = sortBy;
  settings.sortDir = sortDir;
  buildList();
}
// Sorts the list and switches between asc and desc sorting
function sortList(sortedList) {
  let direction = 1;
  if (settings.sortDir === "desc") {
    direction = -1;
  } else {
    settings.direction = 1;
  }
  // Sorts the array with the sortByProperty function
  sortedList = sortedList.sort(sortByProperty);

  function sortByProperty(animalA, animalB) {
    if (animalA[settings.sortBy] < animalB[settings.sortBy]) {
      return -1 * direction;
    } else {
      return 1 * direction;
    }
  }
  return sortedList;
}

// this makes sure the filter and sort function doesn't cancel out each other
function buildList() {
  // filters the animals
  const currentList = filterList(allAnimals);
  // sorts the animals
  const sortedList = sortList(currentList);
  displayList(sortedList);
}
// Displays the list or container
function displayList(animals) {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  animals.forEach(displayAnimal);
}
// Puts the animal properties intro the container
function displayAnimal(animal) {
  // create clone
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}
