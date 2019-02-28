// Code your solution in this file!

function distanceFromHqInBlocks (distance) {
  if (distance < 42) {
    dist = 42 - distance;
  } else {
    dist = distance % 42
  }
}
