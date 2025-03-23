function fun(arr){
    let obj={};
    let n=arr.length;
    let ele=0,freq=0;
    for(let i=0;i<n;i++){
        if(obj[arr[i]]){
            obj[arr[i]]+=1;
        }
        else{
            obj[arr[i]]=1;
        }
    }
    // console.log(obj);
    // for(let key in obj){
    //     console.log(key,obj[key]);
    // }
    for(let key in obj){
        if(obj[key]>freq){
            freq=obj[key];
            ele=key;
        }
    }
    console.log(ele +":"+freq);
    
}
let arr=[1,1,2,1,4,3,1,3,2,1];
fun(arr);
