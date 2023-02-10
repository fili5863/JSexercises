"use strict";

window.addEventListener("load", init);

const model = [];

function init() {
  console.log("init");
  loadComponents();
  loop();
}

function loadComponents() {
  /* Genererer 40 tal fra start, så ikke chartet står tomt */
  for (let i = 0; i < 40; i++) {
    getCustomerNumbers();
    const startCostumerNumbers = getCustomerNumbers();
    model.push(startCostumerNumbers);
  }
}

function loop() {
  modifyModel();
  displayData();

  setTimeout(loop, 1000);
}

function displayData() {
  /* this is where the magic happens. Den her assigner værdierne fra arrayet ind i ".bar"'ene */
  for (let i = 0; i < model.length; i++) {
    const size = model[i];
    const bar = document.querySelectorAll(".bar")[i];

    /* sets the height of the bar from size */
    bar.style.height = size + "px";
  }
}
function modifyModel() {
  const queueSize = getCustomerNumbers();
  /* hvis der er mindre end 40 numre, så tilføjer den et bagerst */
  if (model.length <= 39) {
    model.push(queueSize);
  } else {
    /* hvis der er over 40 numre, fjerner den det forreste og tilføjer igen et bagerst */
    model.shift();
    model.push(queueSize);
  }
  console.log(queueSize);
}

function getCustomerNumbers() {
  /* genererer et random nummer og laver "return" */
  return Math.floor(Math.random() * 32);
}
