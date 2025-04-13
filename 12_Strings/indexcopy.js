const prompt = require("prompt-sync")();

const S = prompt("Enter a string: ");

let ans = "";
for (let i = 0; i < S.length; i++) {
    let asci = S.charCodeAt(i);
    if (asci >= 65 && asci <= 90) {
        ans += String.fromCharCode(asci + 32); 
    } else if (asci >= 97 && asci <= 122) {
        ans += String.fromCharCode(asci - 32); 
    } else {
        ans += S[i];
    }
}

console.log(ans);
