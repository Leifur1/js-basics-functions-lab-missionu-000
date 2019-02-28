// Code your solution in this file!
let dist;
function distanceFromHqInBlocks (distance) {
  if (distance > 42) {
    let dist = distance % 42
    return dist
  } else {
    let dist = 42 - distance
    return dist
  }
}

function distanceTravelledInFeet ()
