const fs = require("fs");

// Open the file for reading
const file = fs.readFileSync("./input.txt", { encoding: "utf-8" });

// Split the file by each line
const lines = file.split("\n");

// Create two arrays for each list
let l1 = [];
let l2 = [];

// Split each line into two numbers and load them to their respective lists
for (let i = 0; i < lines.length; i++) {
  nums = lines[i].split("   ");

  l1.push(Number(nums[0]));
  l2.push(Number(nums[1]));
}

// Sort the lists from smallest to largest number
l1.sort();
l2.sort();

// Create a variable to hold the distance between both numbers
let distance = 0;

for (let i = 0; i < l1.length; i++) {
  // Calculate the distance between the current two elements
  current_distance = get_distance(l1[i], l2[i]);
  // Increment the distance by the current distance
  distance += current_distance;
}

// Log the final distance value
console.log(distance);

function get_distance(i, j) {
  // Return 0 distance if both values are equal
  if (i === j) return 0;

  // Get the smaller and larger numbers
  if (i < j) {
    s = i;
    l = j;
  } else {
    s = j;
    l = i;
  }

  // Return the distance
  return l - s;
}
