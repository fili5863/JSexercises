"use strict";

// window.addEventListener("DOMContentLoaded", init);
// let picker;
// function init() {
//   picker = document.querySelector("#colorPicker");
//   picker.addEventListener("input", onInput);
// }

// function onInput() {
//   console.log(this.value);
// }

window.addEventListener("DOMContentLoaded", init);

function init() {
  randomBackground();
}

function randomBackground() {
  const rgbColor = randomColor();
  console.log(rgbColor);

  const cssColor = rgbToCSS(rgbColor);
  const hexColor = rgbToHex(rgbColor);
  const rgbColor2 = hexToRgb(hexColor);
  console.log(hexColor);
  console.log(rgbColor2);

  document.querySelector("body").style.backgroundColor = cssColor;
}

function randomColor() {
  let r, g, b;

  r = Math.floor(Math.random() * 255);
  g = Math.floor(Math.random() * 255);
  b = Math.floor(Math.random() * 255);

  return { r, g, b };
}

function rgbToCSS(rgbColor) {
  return `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`;
}

/* rgb to hex */

function rgbToHex(rgbColor) {
  return `#${rgbColor.r.toString(16)}${rgbColor.g.toString(16)}${rgbColor.b.toString(16)}`;
}

/* hex to rgb */

function hexToRgb(hexColor) {
  let r, g, b;
  r = parseInt(hexColor.substring(1, 3), 16);
  g = parseInt(hexColor.substring(3, 5), 16);
  b = parseInt(hexColor.substring(5, 7), 16);

  return `rgb(${r}, ${g}, ${b})`;
}
