//find the length of the longest subarray in which all the elements are unique
//1.generate all subarray

let arr=[1,2,1,2,3,4,3,1];
let max=0;

for(let i=0;i<arr.length;i++){
    let obj={};
    // let subArr=[];
    for(let j=i;j<arr.length;j++){
        if(obj[arr[j]]==undefined){
            obj[arr[j]]=1;
        }
        else{
            console.log(obj);
            max=Math.max(max,j-i);
            break;
        }
    }
    obj={};
}
console.log(max);
