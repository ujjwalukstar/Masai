function maxArea(A) {
    let i=0;
    let j=A.length-1;
    let res=-Infinity;

    while(i<j){
        let water=(j-i)*Math.min(A[i],A[j]);
        res=Math.max(res,water);

        if(A[i]<A[j]){
            i++;
        }
        else{
            j--;
        }
    }
    console.log(res);
}
let A=[1,8,6,2,5,4,8,3,7];
maxArea(A);
    
    