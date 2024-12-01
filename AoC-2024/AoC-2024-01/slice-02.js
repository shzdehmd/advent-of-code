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

// Create a variable to hold the overall similarity value
let similarity = 0;

for (let i = 0; i < l1.length; i++) {
  // Filter the second list with the current element of the first list
  // and create a new instances list with all instances of that value if it exists
  let instances = l2.filter((num) => num === l1[i]);

  // Multiply the current number with the length of the instances list
  similarity += l1[i] * instances.length;
}

// Log the final similarity value
console.log(similarity);
