"use strict";

window.addEventListener("DOMContentLoaded", start);

const allAnimals = [];

const Animal = {
  name: "",
  type: "unknown",
  desc: "",
  age: 0,
};

function start() {
  console.log("ready");

  loadJSON();
}

function loadJSON() {
  fetch("animals.json")
    .then(response => response.json())
    .then(jsonData => {
      // when loaded, prepare objects
      prepareObjects(jsonData);
    });
}

function prepareObjects(jsonData) {
  jsonData.forEach(jsonObject => {
    // TODO: Create new object with cleaned data - and store that in the allAnimals array
    const Animal = {
      name: "",
      type: "unknown",
      desc: "",
      age: 0,
    };

    const animal = Object.create(Animal);

    // animal.name = jsonObject.fullname.substring(0, jsonObject.fullname.indexOf(" "));
    // animal.type = jsonObject.fullname.substring(jsonObject.fullname.lastIndexOf(" ") + 1);
    // animal.desc = jsonObject.fullname.substring(
    //   jsonObject.fullname.indexOf("the") + 4,
    //   jsonObject.fullname.lastIndexOf(" ")
    // );
    // animal.age = jsonObject.age;

    // console.log(animal.name);
    // console.log(animal.type);
    // console.log(animal.desc);

    /* Klaus's løsning */
    /* splitter teksten op i arrays */
    const text = jsonObject.fullname.split(" ");

    animal.age = jsonObject.age;
    animal.name = text[0];
    animal.type = text[3];
    animal.desc = text[2];

    // console.log(Animal);
    // TODO: MISSING CODE HERE !!!
    allAnimals.push(animal);
  });

  displayList();
}

function displayList() {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  allAnimals.forEach(displayAnimal);
}

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
