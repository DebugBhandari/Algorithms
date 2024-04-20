const fs = require('fs');

// Load the JSON data from the file
const jsonData = fs.readFileSync('2024-02-21-00-41-30_result.json', 'utf-8');
const data = JSON.parse(jsonData);

// Filter failed cases
const failedCases = data.testLog.filter(entry => !entry.passed);

// Count occurrences of expected values in failed cases after replacing underscores with space
const receivedCounts = {};
failedCases.forEach(entry => {
    const received = entry.received.replace(/_/g, ' '); // Replace underscores with space
    receivedCounts[received] = (receivedCounts[received] || 0) + 1;
});

// Sort received values by count in descending order
const sortedReceived = Object.entries(receivedCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5); // Select top 5


// Print the top 5 most common received values in failed cases after removing underscores
console.log("Top 5 most common received in failed cases:");
sortedReceived.forEach(([received, count], index) => {
    console.log(`${received}, ${count} occurances`);
});
