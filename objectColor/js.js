"use strict";

const color = {
  hex: "#c0ffee",
  rgb: { r: 192, g: 255, b: 238 },
  hsl: { h: 164, s: 100, l: 88 },
};

const Animal = {
  name: "",
  type: "unknown",
  desc: "",
  age: 0,
};

const animal = Object.create(Animal);
Animal.image = "image.jpg";
console.log(animal.image);
const animal2 = Object.create(Animal);
console.log(animal2);
