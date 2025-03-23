//objects are non-primitive data type and mutable
//objects dont follow sequence so they dont have index
// let obj={
//     firstName:"Ujjwal",
//     lastName:"Ukstar",
//     phone: 9199999099,
//     subject:"Dsa"

// }

// Accessing in object

// 1.Dot notation
// console.log(obj.subject);
//keys are supposed to be unique

//2.square notation
// console.log(obj["firstName"]);

// console.log(obj.lastName);
// console.log(obj["phone"]);

//update or create new keys
// obj.marks=100;
// console.log(obj);

// obj["hobby"]="cricket";
// console.log(obj);

//delete
// delete obj.hobby;
// console.log(obj);

// delete obj["marks"];
// console.log(obj);

// for(let keysTest in obj){
//     // console.log(obj.keysTest);
//     // console.log(typeof keysTest);
//     console.log(obj[keysTest]);
//     // console.log(keysTest)
// }

// for(let i in obj){
//     console.log(i+":"+obj[i]);

// }

//mapping and frequwncy
//mapping with obj

// let arr=['a','b','c','d']

// let mappingObj={};

// let startKeyMapping=100;

// for(let i=0;i<arr.length;i++){
//     // console.log(arr[i]);
//     let value=arr[i]; //a
//     // let key=i+1 //0+1=1
//     let key=startKeyMapping+1;
//     // mappingObj.key=value;
//     mappingObj[key]=value; //dynamic key access
//     startKeyMapping++; //100->101
// }
// console.log(mappingObj);
// let obj={}
// obj.a="apple";
// obj.b="ball";
// obj.c="cat";
// console.log(obj);

//calculate frequency

// let freq=['q','a','d','j','q','a','x','s','q'];
// let obj={};

// for(let i=0;i<freq.length;i++){
//     if(obj[freq[i]]){
//         obj[freq[i]]++;
//     }
//     else{
//         obj[freq[i]]=1;
//     }
// }
// console.log(obj);

// let str="masaischool";
// let obj={};

// for(let i=0;i<str.length;i++){
//     let check=obj[str[i]];
//     if(check){
//         obj[str[i]]++;
//     }
//     else{
//         obj[str[i]]=1;
//     }
// }
// console.log(obj);

// let classroom=[
//         ["raj",1,true,99],
//         ["uk",2,false,92],
//         ["u",3,false,100]
//     ]

// let redefinedclassroom=[
//     {
//      student:"raj",
//      roll_no:1,
//      is_present:true,
//      marks:99
//     },
//     {
//         student:"uk",
//         roll_no:2,
//         is_present:false,
//         marks:92
//        },
//     {
//         student:"u",
//         roll_no:3,
//         is_present:false,
//         marks:100
//        },
// ]

// for(let i=0;i<redefinedclassroom.length;i++){
//     console.log(redefinedclassroom[i].is_present);
// }

// let obj={
//     a:"password",
//     b:1234,
//     c:"new password",
//     d:true,
//     e:[1,2,3,4,5],
//     f:
//     {
//         aa:'str1',
//         bb:'str2'
//     }
// }
// console.log(obj);

// let obj={
//     greet:function(firstName,lastName){
//         return ("Hello: "+firstName +lastName);
//     }
// }
// console.log(obj.greet("Ujjwal","Ukstar")); //methods


// let calculator={
//     Add: function(a,b){
//         return a+b;
//     },
//     Sub: function(a,b){
//         return a-b;
//     }
// }
// console.log(calculator.Add(3,"4"));

// let Person={
//     firstName:"Ujjwal",
//     lastName:"Kumar",
//     greet: function(){
//         return `hello ${this.firstName} ${this.lastName},greetings!`
//     }
// }
// console.log(Person.greet());

// a=10;
// b=20;
// let calculator={
//     a:1,
//     b:2,
//     add:function(a,b){
//         // return this.a+this.b;
//         return a+b;
//     }
// }
// console.log(calculator.add());
// console.log(calculator.add(10,30));

//inbuilt methods

// let str="ujjwalukstar";
// console.log(str.search("j"));

// let str1=" ihens bbd kd ";
// console.log(str1.trim().length);

// let s=str.split("");
// console.log(s.join());
// console.log(s.reverse().join(""));
//  console.log(str.slice(1,4));

// let str="home./images./img1";
// let str1=str.split("./");
// let str2=str1.join("->")
// console.log(str2);

//includes
// let arr=[1,2,3,4,5]
// console.log(arr.includes(1));

//slice doesnt update original array
//splice updates the original array

// let arr=["one","two","three","four"];
// // let narr=arr.slice(1,3);
// // console.log(arr);
// // console.log(narr);

//usecase of splice is playlist,todo list and it changes the main array
// let s=arr.splice(1,2,"hello","world");
// console.log(arr);
// console.log(s);//print removes element
// let n=6;
// for(let i=0;i<n;i++){
//     console.log("*");
// }

// let n=6;
// let sp="";
// for(let i=1;i<=n;i++){
//     sp+="*"+" ";
// }
// console.log(sp);

//hollow
// let totalcols=4;
// let totalrows=4;

// for(let i=1;i<=totalrows;i++){
//     let sp=" ";
//     for(let j=1;j<=totalcols;j++){
//         if(i==1 || i==totalrows ||j==1 || j==totalcols){
//             // console.log("*");
//             sp+="*";

//         }
//         else{
//             // console.log(" ");
//             sp+=" ";
//         }
       
//     }
//     console.log(sp);
// }

// let c=1;
// for(let i=1;i<=5;i++){
//     let sp="";
//     for(let j=1;j<=i;j++){
//         sp+=j;
//         c++;
//     }
//     console.log(sp)
// }

// let obj={
//     a:9,
//     b:8,
//     c:6
// }
// // Object.freeze(obj);
// // a=4;
// // console.log(obj);


// let keys=Object.keys(obj);
// console.log(keys);
// let values=Object.values(obj);
// console.log(values);

