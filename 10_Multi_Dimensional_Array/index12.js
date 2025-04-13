// let arr=[[1,2,3],[4,5,6],[7,8,9]]
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         process.stdout.write(`${arr[i][j]} `)
//     }
//     console.log()
// }

const prompt = require("prompt-sync")();

const innerLoop = Number(prompt("Enter the number of rows: "));

const arr = new Array(innerLoop);

for (let i = 0; i < arr.length; i++) {
    arr[i] = []; // Initialize each row as an empty array
}

console.log(arr);
