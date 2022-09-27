// let myName="Shirisha";
// function printName(){
//     console.log(myName)
// }
// // printName()
// myName="Manisha"
// printName()
// myName="Suvarna"
// printName()

// function outerFunction(outerVariable){
//     return function innerFunction(innerVariable){
//         console.log('Outer Variable:' + outerVariable)
//         console.log('Inner Variable:' + innerVariable)
//     }
// }
// const newFunction=outerFunction('outside')
// newFunction('inside')
let arr=[-1,-2,3,4];
var a=arr.map((data)=>{
  return data>0
})
console.log(a);