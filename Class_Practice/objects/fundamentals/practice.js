// function greet(name="Uk"){
//     console.log("hello," +name)
// }
// greet("Ujjwal");
// greet();

// let fruits=["banana","guava","mango","apple"];

// for(let i=fruits.length-1;i>=0;i--){
//     console.log(fruits[i]);
// }
// for(let items of fruits.reverse()){
//     console.log(items);
// }
// let scores=[23,4,5,2,34,292];
// let max=0;
// for(let i=0;i<scores.length;i++){
//     if(scores[i]>max){
//         max=scores[i];
//     }
// }
// console.log(max);

// let obj={
//         firstName:"Ujjwal",
//         lastName:"Ukstar",
//         phone: 9199999099,
//         subject:"Dsa"
    
//     }
//     for(let keytest in obj){
//         // console.log(keytest);
//         console.log(keytest+":"+obj[keytest]);
//     }

let freq=['q','a','d','j','q','a','x','s','q'];
let obj={};
for(let i=0;i<freq.length;i++){
    if(obj[freq[i]]){
        obj[freq[i]]++;
    }
    else{
        obj[freq[i]]=1;
    }
}
console.log(obj);