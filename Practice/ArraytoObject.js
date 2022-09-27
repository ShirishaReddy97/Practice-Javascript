const obj=[{
    name:"shirisha",
    age:25
},
{
name:"manisha",
age:27
}]
// const array=obj.map(arr=>Object.values(arr));
const array=Object.values(obj);
// const array=Object.entries(obj);
// const array=Object.keys(obj);
console.log(array);

let scores = [
    ["Tim", 90],
    ["Joe", 88],
    ["Kelly", 95],
    ["Jesse", 77]
  ]
  let obj1 = Object.fromEntries(scores);
  // console.log(obj1);

// let arr=["shirisha",25];
// // let obj1=Object.assign({},arr)
// let obj1={...arr}
// console.log(obj1);