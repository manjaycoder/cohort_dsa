let prompt=requie("prompt-sync")()
let s=prompt("enter the string")
let isPallindrome=true
let i=0,j=s.length-1
while(i<j){
    if(s[i]!=s[j]){
        isPallindrome=false
        break
    }
    i++
    j--
}
if(isPallindrome) {console.log("give string palledone") }else{
    console.log("not")
}