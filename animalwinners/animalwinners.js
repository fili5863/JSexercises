"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];

const settings = {
  filter: null,
  sortBy: null,
  sortDir: "asc",
};

// The prototype for all animals:
const Animal = {
  name: "",
  desc: "-unknown animal-",
  type: "",
  age: 0,
  // TODO: Add winner-info
  winner: false,
};

function start() {
  console.log("ready");

  loadJSON();

  // TODO: Add event-listeners to filter and sort buttons
}

async function loadJSON() {
  const response = await fetch("animals.json");
  const jsonData = await response.json();

  // when loaded, prepare data objects
  prepareObjects(jsonData);
}

function prepareObjects(jsonData) {
  allAnimals = jsonData.map(preapareObject);

  buildList();
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

function buildList() {
  const currentList = allAnimals; // TODO: Add filter and sort on this list, before displaying
  displayList(currentList);
}

function displayList(animals) {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  animals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  // set clone data

  // TODO: Display winner
  if (animal.winner === true) {
    clone.querySelector("[data-field=winner]").dataset.winner = true;
  } else {
    clone.querySelector("[data-field=winner]").dataset.winner = false;
  }

  // TODO: Display star

  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // TODO: Add event listeners for star and winner
  clone.querySelector("[data-field=winner]").dataset.winner = animal.winner;
  clone.querySelector("[data-field=winner]").addEventListener("click", clickWinner);
  function clickWinner() {
    if (animal.winner === true) {
      animal.winner = false;
    } else {
      tryToMakeAWinner(animal);
      animal.winner = true;
    }
    buildList();
  }
  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}

function tryToMakeAWinner(selectedAnimal) {
  const winners = allAnimals.filter(animal => animal.winner);
  const numberOfWinners = winners.length;
  const other = winners.filter(animal => animal.type === selectedAnimal.type).shift();

  // If there is another of the same type
  if (other !== undefined) {
    console.log("There can only be one winner of each type!");
    removeOther(other);
  } else if (numberOfWinners >= 2) {
    console.log("There can only two winners!");
    removeAorB(winners[0], winners[1]);
  } else {
    makeWinner(selectedAnimal);
  }

  // console.log(`The other winner of this type is ${other.name}`);

  function removeOther(other) {
    // ask the user to ignore or remove the other
    document.querySelector("#remove_other").classList.remove("hide");
    document.querySelector("#remove_other .closebutton").addEventListener("click", closeDialog);
    document
      .querySelector("#remove_other #removeother")
      .addEventListener("click", clickRemoveOther);

    function closeDialog() {
      document.querySelector("#remove_other").classList.add("hide");
      document
        .querySelector("#remove_other .closebutton")
        .removeEventListener("click", closeDialog);
      document
        .querySelector("#remove_other #removeother")
        .removeEventListener("click", clickRemoveOther);
    }

    function clickRemoveOther() {
      removeWinner(other);
      makeWinner(selectedAnimal);
      buildList();
      closeDialog();
    }
    // if ignore, do nothing
    // if remove other:

    // removeWinner(other);
    // makeWinner(selectedAnimal);
  }

  function removeAorB(winnerA, winnerB) {
    // ask the user to ignore, or remove A or B
    // if ignore, do nothing
    // if remove A:
    removeWinner(winnerA);
    makeWinner(selectedAnimal);

    // if remove A:
    removeWinner(winnerB);
    makeWinner(selectedAnimal);
  }

  function removeWinner(winnerAnimal) {
    winnerAnimal.winner = false;
  }

  function makeWinner(animal) {
    animal.winner = true;
  }
}
