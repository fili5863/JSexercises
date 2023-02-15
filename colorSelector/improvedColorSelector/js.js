"use strict";

window.addEventListener("DOMContentLoaded", init);
const inputColor = document.querySelector("input");

function init() {
  addEventListeners();
}

function addEventListeners() {
  return inputColor.addEventListener("input", showColor);
}

function showColor() {
  const hex = inputColor.value;
  const rgb = HEXtoRGB(hex);
  const toHex = RGBtoHEX(rgb);
  const toCSS = RGBtoCSS(rgb);
  const toHSL = RGBtoHSL(rgb);
  console.log(rgb);
  console.log(toHex);
  console.log(toCSS);
  console.log(toHSL);
  displayColors(rgb, toHex, toCSS, toHSL);
}

function displayColors(rgb, toHex, css, hsl) {
  document.querySelector("#colorDisplay").style.backgroundColor = css;
  document.querySelector("#hex").textContent = `${toHex}`;
  document.querySelector("#rgb").textContent = `(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  document.querySelector("#hsl").textContent = `(${hsl.h.toFixed(0)}, ${hsl.s.toFixed(
    0
  )}%, ${hsl.l.toFixed(0)}%)`;
}

function HEXtoRGB(hex) {
  let r, g, b;
  r = parseInt(hex.substring(1, 3), 16);
  g = parseInt(hex.substring(3, 5), 16);
  b = parseInt(hex.substring(5, 7), 16);

  return { r, g, b };
}

function RGBtoHEX(rgb) {
  return `#${rgb.r.toString(16)}${rgb.g.toString(16)}${rgb.b.toString(16)}`;
}

function RGBtoCSS(rgb) {
  return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
}

function RGBtoHSL(rgb) {
  rgb.r /= 255;
  rgb.g /= 255;
  rgb.b /= 255;

  const min = Math.min(rgb.r, rgb.g, rgb.b);
  const max = Math.max(rgb.r, rgb.g, rgb.b);
  let h, s, l;

  if (max === min) {
    h = 0;
  } else if (max === rgb.r) {
    h = 60 * (0 + (rgb.g - rgb.b) / (max - min));
  } else if (max === rgb.g) {
    h = 60 * (2 + (rgb.b - rgb.r) / (max - min));
  } else if (max === rgb.b) {
    h = 60 * (4 + (rgb.r - rgb.g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  rgb.r *= 255;
  rgb.g *= 255;
  rgb.b *= 255;

  return { h, s, l };
}
