// fetch is an api
// console.log(fetch());

//fetch-> spi csll id usually protected
//eg
// fetch('https://fakestoreapi.com/products/1')
//             .then(res=>res.json())
//             .then(json=>console.log(json))

//fetch-> is just a fun which takes an url and returns a promise
//fetchapi-> a fetch  func + other obj properties

//erro handling
// let searchPropmt=prompt("What?")
// fetch('https://fakestoreapi.com/products')
// .then((res)=>{
//     return res.json()
// })
// .then((res)=>{
//    let narr=res.filter((ele)=>{
//     return ele.category===searchPropmt
//    })
//    console.log(narr)
//    console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })

// search-> prompt
// promise1
//   .then(() => promise2)
//   .then(() => promise3)
//   .then(() => console.log("All done"))
//   .catch(() => console.log("Error caught"));

function createCar(model, color='black' , maxSpeed) {
  return {
    model,
    color,
    maxSpeed,
    displayInfo() {
      console.log(`Car: ${this.model}`);
    }
  };
}


const carA = createCar("Coupe", "blue", 130);
const carB = createCar("Coupe", "blue", 130);
console.log(carA.displayInfo === carB.displayInfo);
