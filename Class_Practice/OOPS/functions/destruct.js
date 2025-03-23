var obj={
    a:10,
    b:20,
    c:30
}
//without destructuring
// var a=obj.a;
// var b=obj.b;
// var c=obj.c;
// console.log(obj);

//with destructuring
// var{a,b,c}=obj;
// console.log(a,b,c);

//without destructuing

// var arr=[10,20,30]
// var first=arr[0];
// var second=arr[1];
// var third=arr[2];
// console.log(first,second,third)

//with destr..
// var[first,search,third]=arr;
// console.log(first,second,third);

//array destruc...
// var arr=[1,2,3];
// var[first,,third]=arr;

// console.log(first);
// console.log(third);

//default values
// var arr=[1];
// var[a='default value of a',b=10]=arr;
// console.log(a,b);

//object destruct..
// var person={
//     name:"john",
//     age:23
// }
// var name=person.name;
// // console.log(name);;

// var {userName}=person;
// // console.log(userName);

// var{name:userName,age=30}=person;
// console.log(userName,age);

//swap using array destruct.
// var a=2;
// var b=4;
// [a,b]=[b,a];
// console.log(a,b);

// var arr=[10,20,30,40,56];
// var[,second,,fourth]=arr;
// // console.log(first,third);
// console.log(second,fourth)

//destruct.. obj
// const user={
//     profile:{
//         name:"Uk",
//         address:{
//             city:"ranchi",
//             state:"Jharkhand",
//         },
//     },
// };
// // var{profile}=user;
// var{
//     profile:{
//         address:{city,state},
//     },
// }=user;
// console.log(city);
// console.log(state);


//spread operator {+ the array elements}
// var arr1=[1,2,3];
// var arr2=[4,5,6];
// var c=[...arr1,...arr2];
// console.log(c);


// var obj1={
//     a:1,
//     b:2
// };
// var obj2={
//     c:3,
//     d:4,
// }
// var c={
//     ...obj1,
//     ...obj2,
// }
// console.log(c);


//rest parameter
// function sum(...nums){
//     let total=0;
//     for(let num of nums){
//         total+=num;
//     }
//     return total;
// }
// console.log(sum(1,2,3,4,5));

// var[first,...rest]=[10,20,30,40,4];
// console.log(first,rest);

// function mult(factor,...nums){
//     var result=factor;
//     for(var i=0;i<nums.length;i++){
//         result=result+nums[i];
//     }
//     return result;
// }


//nullish coalescing

// var input=inputFromAPI ?? defaultValue

// var input=null;
// var output=input??"default";
// console.log(output);

// var input=0;
// var output=input || 10;
