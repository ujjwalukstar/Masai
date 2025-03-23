let matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
let n=matrix.length;
let sp="";
for(let i=n-1;i>=0;i--){
    // console.log(matrix[i][0])
    sp+=matrix[i][0]+" "
}
for(let i=1;i<n;i++){
    // console.log(matrix[i][i])
    sp+=matrix[i][i]+" "
}
for(let i=n-2;i>=0;i--){
    // console.log(matrix[i][2])
    sp+=matrix[i][2]+" "
}w
console.log(sp);