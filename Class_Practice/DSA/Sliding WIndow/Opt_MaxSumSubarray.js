function maxSubarraySum(arr,k,n){
    let sum=0;

    for(let i=0;i<k;i++){
        sum+=arr[i];
    }

    let temp=sum;
    for(let i=k;i<n;i++){
        sum=sum+arr[i]-arr[i-k];

    if(sum>temp) {
        temp=sum;
    }
}
    console.log(temp);
}
let arr=[1,4,2,10,23,3,1,0,20];
let n=arr.length;
let k=4;
maxSubarraySum(arr,k,n)
// tc->o(n)