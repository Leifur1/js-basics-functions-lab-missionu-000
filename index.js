// Code your solution in this file!
let blocks;
let feet;

function distanceFromHqInBlocks (distance) {
  if (distance > 42) {
    let blocks = distance % 42
    return blocks
  } else {
    let blocks = 42 - distance
    return blocks;
  }
};

function distanceTravelledInFeet (distance) {
  if (distance > 42) {
    let feet = (distance % 42) * 264
    return feet
  } else {
    let feet = (42 - distance) *264
    return feet
  }
}
