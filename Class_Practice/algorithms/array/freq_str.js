let str="aaaaabbbcccdddaaaa";
let n=str.length;
let res="";

for(let i=0;i<str.length;i++){
    let count=1;
    while(i<n-1 && str[i]==str[i+1]){
        count++;
        i++;
    }
    res+=str[i];
    res+=count;
}
console.log(res);

