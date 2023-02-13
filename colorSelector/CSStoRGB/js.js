"use strict";

convertToRBG("rgb(12, 56,233)");

function convertToRBG(cssCol) {
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
}
