function k_modulo(arr,n,k){
    arr.sort((a, b) => (a % k) - (b % k));
    console.log(arr.join(" "));
}
let arr=[12,18,17,65,46];
let k=6;
let n=arr.length;
k_modulo(arr,n,k);