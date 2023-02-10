"use strict";

const arr = [];
let iterator = -1;

initLoop();

function initLoop() {
  iterator++;
  arr.splice(8);
  arr.unshift(iterator);
  setTimeout(initLoop, 1000);
  console.log(arr);
}
