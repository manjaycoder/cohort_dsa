
let arr1=new Set()
arr1.add(1)
arr1.add(2)
arr1.add(3)
arr1.add(1)
arr1.add(4)
arr1.add(3)
arr1.add(5)
arr1.add(6)
arr1.add(7)
arr1.delete(1)
arr1.has(1)
// for(let a of arr1){
//     process.stdout.write(a*2+"")
// }
// console.log()


arr1.clear()
arr1.forEach((e)=>{
    console.log(e)
})