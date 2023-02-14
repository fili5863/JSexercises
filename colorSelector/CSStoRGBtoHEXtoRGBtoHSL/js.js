"use strict";

convertToRBG("rgb(10, 218,85)");

function convertToRBG(hex) {
  const numberStr = cssCol.substring(cssCol.indexOf("(") + 1, cssCol.indexOf(")"));

  console.log(numberStr);

  let splitArr = numberStr.split(",");

  console.log(splitArr);

  let r = parseInt(splitArr[0].trim());
  let g = parseInt(splitArr[1].trim());
  let b = parseInt(splitArr[2].trim());

  console.log("r", r);
  console.log("g", g);
  console.log("b", b);

  RGBtoHEX(r, g, b);
}

function RGBtoHEX(red, green, blue) {
  console.log(red, green, blue);

  let redToHex = red.toString(16).padStart(2, "0");
  let greenToHex = green.toString(16).padStart(2, "0");
  let blueToHex = blue.toString(16).padStart(2, "0");
  console.log(`#${redToHex}${greenToHex}${blueToHex}`);

  HEXtoRGB(redToHex, greenToHex, blueToHex);
}

function HEXtoRGB(red, green, blue) {
  let Rgb = parseInt(`${red}`, 16);
  let rGb = parseInt(`${green}`, 16);
  let rgB = parseInt(`${blue}`, 16);

  console.log(Rgb, rGb, rgB);

  RGBtoHSL(Rgb, rGb, rgB);
}

function RGBtoHSL(red, green, blue) {
  let r = red;
  let g = green;
  let b = blue;

  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
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

  h = h.toFixed();
  s = s.toFixed();
  l = l.toFixed();

  console.log("hsl(%f,%f%,%f%)", h, s, l);
}
