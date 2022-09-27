// arr = ["shirisha","reddy"];
// arr1 = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//     arr1.push(arr[i]);
// }
// console.log(arr1);

let arr=[]
let string = ["Shirisha","Ayilreddy","Gary"];
let ret=[...string];
console.log(ret)
let str=ret.toString();
let split=[...str].reverse().join('');
arr.push(split)
console.log(arr)