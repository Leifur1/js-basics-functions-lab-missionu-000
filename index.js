// Code your solution in this file!

function distanceFromHqInBlocks (distance) {
  if distance < 42 {
    let dist = 42 % distance;
  } else { 
    let dist = distance % 42
  }
  return dist
}
