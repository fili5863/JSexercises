"use strict";

// 14, 25, 20, 40, 8, 12, 29, 24, 35, 26, 5, 31, 18, 32, 30, 11, 10, 6, 21, 23, 7, 17, 39, 13, 16, 36, 34, 3, 1, 27, 22, 9, 38, 19, 37, 3, 15, 2, 28, 4,

window.addEventListener("load", init);

// den falske øver her
const model = [
  14, 25, 20, 40, 8, 12, 29, 24, 35, 26, 5, 31, 18, 32, 30, 11, 10, 6, 21, 23, 7, 17, 39, 13, 16,
  36, 34, 3, 1, 27, 22, 9, 38, 19, 37, 3, 15, 2, 28, 4,
];

// function init() {
//   console.log("init");
//   loop();
// }

// function loop() {
//   modifyModel();
//   displayData();

//   setTimeout(loop, 1000);
// }

// function getCustomerNumbers() {
//   return Math.floor(Math.random() * 32);
// }

// function displayData() {
//   for (let i = 0; i < model.length; i++) {
//     const size = model[i];
//     const bar = document.querySelectorAll(".bar")[i];

//     /* sets the height of the bar from size */
//     bar.style.height = size + "px";
//   }
// }

function init() {
  console.log("init");
  loop();
}

function loop() {
  modifyModel();
  displayData();

  setTimeout(loop, 1000);
}

function getCustomerNumbers() {
  return Math.floor(Math.random() * 32);
}
function displayData() {
  for (let i = 0; i < model.length; i++) {
    const size = model[i];
    const bar = document.querySelectorAll(".bar")[i];

    /* sets the height of the bar from size */
    bar.style.height = size + "px";
  }
}
function modifyModel() {
  const queueSize = getCustomerNumbers();
  if (model.length <= 39) {
    model.push(queueSize);
  } else {
    model.shift();
    model.push(queueSize);
  }
  console.log(queueSize);
}

////////////////////////////////////

// window.addEventListener("load", init);

// function init() {
//   loop();
// }

// function loop() {
//   const queueSize = getCustomerNumbers();

//   if (model.length <= 39) {
//     model.push(queueSize);
//   } else {
//     model.shift();
//     model.push(queueSize);
//   }

//   //   model.shift();
//   //   model.push(queueSize);
//   setTimeout(modifyModel, 1000);
//   console.log(model);
// }

// function modifyModel() {
//   loop();
// }

// Controller
// function getCustomerNumbers() {
//     return Math.floor(Math.random() * 32);
//   }
