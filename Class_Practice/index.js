// let studentName=["uk","nk","rk"];
// let idArr=[101,102,103];
// let result=[true,false,true];

// console.log(studentName[1],idArr[1],result[1]);

let classroom=[
    ["raj",1,true,99],
    ["uk",2,false,92],
    ["u",2,false,100]
]
// console.log(classroom[1]);

//traverse
// for(let i=0;i<classroom.length;i++){
//     let matrixRow=classroom[i];
//     for(let j=0;j<matrixRow.length;j++){
//         console.log(matrixRow[i][1]);
//     }
// }

let sum=0;
for(let i=0;i<classroom.length;i++){
    sum+=classroom[i][3];

}
console.log(sum/classroom.length);

//horizontal traversal
// let arr=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// let str="";
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         str+=arr[i][j];
//     }
// }
// console.log(str);

// vertical traversal
// arr[0][0]
// arr[1][0]
// arr[2][0]
// arr[0][1]
// arr[1][1]
// ...

// let str="";
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         str+=arr[j][i];
//     }
// }
// console.log(str);

let matrix=[
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]
// printNonBorder(matrix);
// printBorder(
//     [
//         [1,2,3],
//         [4,56,66,7,5],
//         [8,34,83]
//     ]
// )
    // for(let i=0;i<matrix.length;i++){
    //     for(let j=0;j<matrix[i].length;j++){
    //         if(i!=0 ||i!=matrix.length-1 || j!=0 || j!=matrix.length-1){
    //             console.log(matrix[j][i]);
    //         }
    //     }
    // }
    // function printNonBorder(matrix){
    //     for(let i=1;i<matrix.length-1;i++){
    //         for(let j=1;j<matrix.length-1;j++){
    //             console.log(matrix[i][j]);
    //         }
    //     }
    // }

    // function printdiagonals(matrix){
    //     for(let i=0;i<matrix.length;i++){
    //         for(let j=0;j<matrix.length;j++){
    //             if(i==j){
    //                 console.log(matrix[i][j]);
    //             }
    //         }
    //     }
    // }
    // printdiagonals(matrix);

    function printdiagonals(matrix){
        let primary="";
        for(let i=0;i<matrix.length;i++){
            for(let j=0;j<matrix.length;j++){
                if(i==j){
                    primary+=(matrix[i][j]);
                }
            }
        }
        let secondary="";
        for(let i=0;i<matrix.length;i++){
            for(let j=0;j<matrix[i].length;j++){
                if(i+j==matrix.length-1){
                console.log(matrix[i][j]);
                }
            }
        }   
    }
    printdiagonals(matrix);