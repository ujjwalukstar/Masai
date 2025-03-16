//stock price and no. of days
function findSpan(price,n){
    let span=[];
    span[0]=1;
    for(let i=1;i<n;i++){
        let count=0;
        for(let j=i-1;j>=0;j--){
            if(price[j]>price[i]){
                break;
            }
            else{
                count++;
            }
            span[i]=count+1; //including curr day
        }
        console.log(span);
    }
}
findSpan(200,4);