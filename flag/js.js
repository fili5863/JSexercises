"use strict";

isDrowned(1.5, true, true);

function isDrowned(seaLevel, wetSuit, lyingDown) {
  let isDrowned = false;
  if (seaLevel > 2 && !wetSuit) {
    isDrowned = true;
  } else if (seaLevel <= 1 && lyingDown) {
    isDrowned = true;
  }

  return isDrowned;
}
