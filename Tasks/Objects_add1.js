var arr=[];
var data = [{
    name: "Hello",
    age: 20,
},
{
    name1: "Hello1",
    age1: 21
},
{
    name2: "Hello2",
    age2: 22
}]
var add=0;
arr.push(add);
data.map((val)=>{
    if(val.name ==='Hello')
    arr.push(val.name)
    if(val.name1==='Hello1')
    arr.push(val.name1)
    if(val.name2==='Hello2')
    arr.push(val.name2)
    if(typeof(val.age)==='number')
    add = add + val.age
    if(typeof(val.age1)==='number')
    add  = add + val.age1
    if(typeof(val.age2)==='number')
    add  = add +val.age2 
})
arr.push(add)
console.log(arr)




// data.map((val)=>{
//     if(val.name ==='Hello' || val.name1 ==='Hello1' || val.name2 ==='Hello2'){
//         arr.push(val.name,val.name1,val.name2)
//     }
//     else if(typeof (val.age==='number' || val.age1==='number' || val.age2==='number'))
//     add += val.age + val.age1 +val.age2
//     arr.push(add)
// })
// console.log(arr)