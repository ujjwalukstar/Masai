// brute force
function maxSumOfSubarray(arr,k){
    let n=arr.length;
    let res=-Infinity;

    for(let i=0;i<=n-k;i++){
        let sum=0;
        for(let j=i;j<=i+k-1;j++){
            sum+=arr[j];
        }
        if(sum>res){
            res=sum;
        }
    }
    console.log(res);
}
let arr=[1,4,2,10,23,3,1,0,20];
let k=4;
maxSumOfSubarray(arr,k)
// tc->nk