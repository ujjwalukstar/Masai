function mergeTwoArray(A,B){
    let n1=A.length;
    let n2=B.length;

    let i=0,j=0;k=0;
    let res=[];
    
    while(i<n1 && j<n2){
        if(A[i]<B[j]){
        res[k]=A[i];
        i++;
        k++;
    }
    else{
        res[k]=B[j];
        j++;
        k++;
    }
}
    while(j<n2){
        res[k]=B[j];
        j++;
        k++;
    }
    console.log(res.join(" "));
}
let A=[1,3,5,7,9,11];
let B=[2,4,6,8,10,12];
mergeTwoArray(A,B);