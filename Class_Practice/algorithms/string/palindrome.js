// function isPalindrome(s1){
//     let s2="";
//     let n=s1.length;
//     for(let i=n-1;i>=0;i--){
//         s2=s2+s1[i];
//     }
//     return s1==s2
// }
// console.log(isPalindrome("ukstar"));
// console.log(isPalindrome("racecar"));

//sum of element in array
// arr=[10,20,30,40,-50];
// function findsum(nums){
//     let sum=0;
//     let n=nums.length;
//     for(let i=0;i<n;i++){
//         sum+=nums[i];
//     }
//     return sum;
//     // console.log(sum);
// }
// sum(arr);

//maximun subarray
// nums=[5,4,-1,7,8]
//find subarray=(5-6/2)
// function findmaximumSubarray(nums){
//     let n=nums.length;
//     let result=0;
//     for(let i=0;i<n;i++){
//         let temp=[]
//         for(let j=1;j<n;j++){
//             temp.push(nums[j]);
//             // console.log(temp);
//             let sum=findsum(temp);
//             if(sum>result){
//                 result=sum;
//             }
//         }
//         return result;
//     }
// }
// console.log(findmaximumSubarray(nums))

//anagram
// str1="anagram";
// str2="nagaram"
// function is_anagram(str1,str2){
//     str1=str1.split('').sort().join('');
//     str2=str2.split('').sort().join('');
//     return str1==str2;

// }
// console.log(is_anagram(str1,str2));


// let arr=[16,17,4,3,5,2];
// function findSum(arr){
//     let sp="";
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;i<arr.length;j++){
//         if(arr[j]>arr[i]){
//             sp+=arr[i]+" ";
//         }
//     }
// }
//     console.log(sp);
// }
// findSum(arr);

//or
let arr=[16,17,4,3,5,2];
let n=arr.length;
let result=[];
for(let i=0;i<arr.length;i++){
    let flag=0;
    for(let j=i+1;j<arr.length;j++){
        flag=1;
        break;
    }
    if(flag==0){
        result.push(arr[i]);
    }
}
result.push(arr[n-1])
console.log(result);