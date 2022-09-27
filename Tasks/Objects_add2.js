var arr = [];
var data = {
    name: 'Hello',
    data2: [{
        name: 'Hello1',
        age1: 21
    }, {
        name1: [{
            name2: 'Hello2',
            age2: 22
        }]
    }],
    age: 20
}
var add = 0;
if (data.name) {
    arr.push(data.name)
}
if (data.age) {
    add += data.age
}
data.data2.map((val) => {
    if (val.name) {
        arr.push(val.name)
    }
    if (val.age1) {
        add += val.age1
    }
})
data.data2[1].name1.map((val1) => {
    if (val1.name2) {
        arr.push(val1.name2)
    }
    if (val1.age2) {
        add += val1.age2
    }
})
arr.push(add);
console.log(arr);

// data1.push(data);
// var add = 0;
// data1.map((val)=>{
//     if(val.name==='Hello'){
//         arr.push(val.name)
//     }
// })
// data1.data2.map((val1)=>{
//     if(val1.name1==='Hello1')
//     arr.push(val1.name1)
// })
// console.log(arr)



