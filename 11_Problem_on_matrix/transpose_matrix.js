let matrix=[[1,2,3],[4,5,6],[7,8,9]]

function transpose(matrix){
    let arr=Array.from({length:arr[0].length},()=>Array(matrix.length))
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            arr[i][j]=matrix[j][i]
        }
    }
    return arr
}
console.log(transpose(matrix))

/*


*/