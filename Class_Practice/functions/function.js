// function declaration
// add(3,4);// only this will work as it is not stored in varaibale and doesnt come under temporal deadzone
// sum(5,5);
// sumArrow(2,3);
// function add(a,b){
//     console.log("This is declared way of function :",a+b);

// }

// let sum=function(a,b){ //traditional way
//     console.log(a+b);
// }

// let sumArrow=(a,b)=>{ //arrow func
//     console.log(a+b);
// }

// add(3,4);
// sum(5,5);
// sumArrow(2,3);

//only with one parameter
// let greet=name=>{
//     console.log(name);
// }

//only with one line
// let mult=x=>x*x
// console.log(mult(3));

//without parameter
// let hello=()=>console.log("hello") //implicit when user write return
// hello();

//explicit means write return manually
// let hello=()=>{return "Hello"}
// console.log(hello());


//destructuring ->mimic the structure
// let fruits=["apple","mango","kiwi","orange"]
// let [fruitOne,fruittwo,fruitthree,fruitfour]=fruits
// console.log(fruitOne,fruittwo,fruitthree,fruitfour);

// let [,fruittwo,,]=fruits
// console.log(fruittwo)

// let fruits=["apple","mango","kiwi",["orange"]]
// let [fruitOne,fruittwo,fruitthree,[fruitfour]]=fruits
// console.log(fruitfour);

// let number=[10,20]
// let [a=1,b=2]=number
// console.log(a,b)

//lexical scope and closure
//lexical scope-> inner func can access the value of var in outer func
// function outer(){
//     let outerVar="I am in outer func"
//     function inner(){
//         console.log(outerVar);
//     }
//     inner();
// }
// outer();

//closure
//a func remembers the values which is present in its outer scope/func
function counter(){
    let count=0;
    return function(){
        count++
        console.log(count)
    }
}
let increment=counter();
increment();