// Code your solution in this file!
let blocks;

function distanceFromHqInBlocks (distance) {
  if (distance > 42) {
    let blocks = distance % 42
    return blocks
  } else {
    let blocks = 42 - distance
    return blocks
  }
}

function distanceTravelledInFeet (distance) {

}
