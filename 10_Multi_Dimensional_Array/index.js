
const prompt = require("prompt-sync")();

const innerLoop = Number(prompt("Enter the number of rows: "));

const arr = new Array(innerLoop);

for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(4); 



for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        arr[i][j] = Number(prompt(`Enter the value for arr`));
    }
}
}
process.stdout.write(arr)