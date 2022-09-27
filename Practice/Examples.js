// //1//
// function food(){
//     console.log("Choice1"+favfood);
//     var favfood="Sushi";
//     console.log("Choice2"+favfood);
// }
// food();
// //2//
// food();
// function food(){
//     console.log("Choice1"+favfood);
//     var favfood="Sushi";
//     console.log("Choice2"+favfood);
// }
// //3//
// var favfood="Noodles";
// function food(){
//     console.log("Choice1"+favfood);
//     var favfood="Sushi";
//     console.log("Choice2"+favfood);
// }
// food();
// //4//
// function food(){
//     var favfood="Noodles";
//     console.log("Choice1"+favfood);
//     var favfood="Sushi";
//     console.log("Choice2"+favfood);
// }
// food();
// //5//
// // var foo=function(){
// //     console.log("Choice1"+favfood);
// //     let favfood="Sushi";
// //     console.log("Choice2"+favfood);
// // }
// // foo();
// //6//
// let weather="sunny";
// function changeWeather(){
//     let weather="rainy";
//     console.log("change weather:"+weather);
// }
// changeWeather();
//     console.log("change weather:"+weather);
// //7//
// var a=[2,3,4];
// a.push(5);
// a.unshift(1);
// console.log(a);
// //8//
// let arr=[1,2,3,4,5];
// arr.splice(1,3,"hello");
// console.log(arr);
// //9//
// let arr1=[1,2,3,4];
// let newArr=[];
// arr1.forEach((num)=>{newArr.push(num*2)});
// console.log(newArr);
// //10//
// let arr2=[1,2,3,4];
// let newarr=arr2.map(num=>num*2);
// console.log(newarr);

//11//
const arr3=[2,3,4,5,6];
const mapResult=arr3.map((ar)=>{
    return ar+2;
});
const foreachResult=arr3.forEach((ar,i)=>{
    arr3[i]= ar+3;
});
console.log(mapResult,foreachResult,arr3);
