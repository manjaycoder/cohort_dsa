let word=["attention","people","attribute"]
let s="at";
let count=0;
for (let i = 0; i < word.length; i++) {
    if(word[i].startsWith(s)) count++;
    
}
console.log(count)