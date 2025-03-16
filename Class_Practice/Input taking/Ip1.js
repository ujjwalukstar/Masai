//Every input in js is in the form of string 

// var x="10";
// var y=Number(x);
// console.log(y)
// unary op(+) is also used to convert string to number,and will only work for single input
// var y=+(x);
// console.log(y)

//convert arr of strings to arr of number
// 1.
// var x=["1","2","3","4"];
// let y=[];
// for(let i=0;i<x.length;i++){
//     y.push(Number(x[i]));
// }
// console.log(y);

// 2.Using Map
// var y=x.map(Number)
// console.log(y)

// taking input(multiple lines)
// input=input.split(" ").map(Number)
// call the logic func
//sumOfNum(input){

// }
 
// single and multiple number both(more than one line input)
/*
Eg
5
1 2 3 4 5
input=input.split('\n') //first separate the multiple lines
// console.log(input)

var size=+(input[0]); //for single line
var arr=input[1].split(" ").map(Number) //for multiple line
console.log(size,arr);
*/


/*
for three lines
Eg.
4 -> size
1 2 3 4 ->array
2->target

function runProgram(input){
    input=input.split("\n");
    var size=+(input[0]);
    var array=input[1].split(" ").map(Number);
    var target=+(input[2])

    checksTarget(size,array,target)
}
function checksTarget(size,array,target){
...
}
*/

/*
for two lines in which first line have two values
Eg
4 2 ->size target
1 2 3 4 

function runProgram(input){
    input=input.trim().split("\n")
    line1=input[0].trim().split(" ").map(Number);

    var size=line1[0];
    var target=line1[1];

    var arr=input[1].trim().split(" ").map(Number);
    checksTarget(size,array,target)
    
}

*/

/*
Eg
6
ujjwal

input=input.split("\n");
var size=+(input[0])
var string=input[1]

checkVowels(size,str);
*/