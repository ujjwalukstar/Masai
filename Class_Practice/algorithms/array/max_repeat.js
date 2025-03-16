let arr=[1,1,2,1,4,3,1,3,2,1]
function maximum(arr){
    // return Math.max(...arr);
    let res=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>res){
            res=arr[i];
        }
        
    }
    console.log(res);

}
maximum(arr);
