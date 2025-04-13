const prompt = require("prompt-sync")();

const innerLoop = Number(prompt("Enter the number of rows: "));

const arr = new Array(innerLoop);

for (let i = 0; i < arr.length; i++) {
    arr[i] = []; // Initialize each row as an empty array
}

console.log(arr);