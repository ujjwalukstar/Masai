function weightLifting(arr,n){
    
    let left=0;
    let right=n-1;

    let harry=arr[left];
    let harry_sum=arr[left];

    let john=0;
    let john_sum=0;

    left+=1;

    while(left<=right){
        while (john<=harry && left<=right){
            john+=arr[right];
            john_sum+=arr[right];
            right-+1
        }
    }
    harry=0;
    while(harry<=john && left<=right){
        harry+=arr[left];
        john_sum+=arr[left];
        left+=1;
    }
}
let arr=[3,1,4,1,5,9,2,6,5,3,5];
let n=arr.length;
weightLifting(arr,n);

// tc->o(n)