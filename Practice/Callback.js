// let x=function(){
//     console.log("I am called from inside a function");
// };
// let y=function(callback){
//     console.log("Do Something");
//     callback();
// }
// y(x);

// let calc=function(num1,num2,calcType){
//     if(calcType==="add"){
//         return num1 + num2;
//     }
//     else if(calcType==="multiply"){
//         return num1*num2;
//     }
//     else if(calcType==="division"){
//         return num1/num2;
//     }
//     else{
//         return num1-num2;
//     }
//     }
//     console.log(calc(2,3,"substract"));

// let add=function(a,b){
// return a+b;
// };
// let mul=function(a,b){
//     return a*b;
// };
// let div=function(a,b){
//     return a/b;
// };
// let doWhatever=function(a,b){
//    console.log(`here are your two numbers back ${a},${b}`);
// };
// let calc=function(num1,num2,callback){
//     if(typeof callback==="function"){
//         return callback(num1,num2);
//     }
// };
// console.log(calc(2,3,doWhatever));
// console.log(calc(4,6,function(a,b){
//     return a-b;
// }));
