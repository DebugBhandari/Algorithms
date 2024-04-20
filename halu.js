const fs = require('fs');

// Load the JSON data from the file
const jsonData = fs.readFileSync('2024-02-21-00-42-57_result.json', 'utf-8');
const data = JSON.parse(jsonData);

// Initialize count of hallucinations
let hallucinationCount = 0;

// Iterate through each test log entry
data.testLog.forEach(entry => {
    // Check if the entry is a hallucination
    if (entry.isHallucination) {
        hallucinationCount++;
    }
});

// Print the total count of hallucinations
console.log("Total number of hallucinations:", hallucinationCount);