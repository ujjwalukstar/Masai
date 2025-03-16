//longest palindromic substring

//1.Generate all substrings
let str="thisracecarisgood";
let max=0;

for(let i=0;i<str.length;i++){
    let bag="";
    for(let j=0;j<str.length;j++){
        bag+=str[j];
        let res=checkPalindrome(bag);

        if(res==true && bag.length>max){
            max=bag.length;
        }
        // console.log(bag);
    }
}
//2.check if the substring is palindrome
function checkPalindrome(str){
    for(let i=0;i<Math.floor(str.length/2);i++){
        if(str[i]!=String(str.length-i-1)){
            return false;
        }
    }
    return true;
}