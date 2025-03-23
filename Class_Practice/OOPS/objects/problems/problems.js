//1.find sum
// let n=10;
// let sum=0;
// for(let i=1;i<=n;i++){
//     if(i%2!=0){
//         sum+=i;
//     }
// }
// console.log(`sum of ${n} is: ${sum}`);

//2.division
// let n=8
// let x=Math.floor(32/n);
// if(n==0) console.log(-1);
  
//     else{
//         if(x==0) console.log("Too Low");
//         else console.log(x);
//     }

//4.factors
// let n=12;
// // let fact=0;
// let arr={};
// for(let i=1;i<=n;i++){
//     if(i%n==0){
        
//     }
// }
// console.log(arr);

//N traversal

// var mat=[
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     [13,14,15,16]
// ]

// console.log(mat);

// var bag="";
// var n=mat.length;
// for(let i=n-1;i>=0;i--){
//     bag+=mat[i][0]+" "
// }
// // console.log(bag);

// for(let i=1;i<n;i++){
//     bag+=mat[i][i]+" ";
// }
// // console.log(bag);

// for(let i=n-2;i>=0;i--){
//     bag+=mat[i][n-1]+" ";
// }
// console.log(bag);

//diagonal pattern
// let n=5;
// let bag="";
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         if(i==j || i+j==n+1){
//             bag+="*"
//         }
//         else{
//             bag+=" "
//         }
//     }
//     bag+="\n"
// }
// console.log(bag)

//m pattern
// let bag="";
// let n=5;
// for(let i=0;i<n;i++){
//   for(let j=0;j<n;j++){
//     if(j==0 || j==n-1 ||(i<=n/2 && (i==j || i+j==n-1))){
//         bag+="* "
//     }
//     else{
//         bag+="  "
//     }
//   }
//   bag+="\n"
// }
// console.log(bag);