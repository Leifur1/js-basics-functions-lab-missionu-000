// Code your solution in this file!
let blocks;
let feet;

function distanceFromHqInBlocks (distance) {
  if (distance > 42) {
    let blocks = distance % 42
    return blocks
  } else {
    let blocks = 42 - distance
    return blocks
  }
}

function distanceFromHqInFeet (distance) {
  if (distance > 42) {
    let feet = ((distance - 42) * 264)
    return feet
  } else {
    let feet = ((42 - distance) * 264)
    return feet
  }
}

function distanceTravelledInFeet (start, destination) {
  if ( start < destination) {
    return (destination - start) * 264
  } else {
    return (start - destination) * 264
  }
}
