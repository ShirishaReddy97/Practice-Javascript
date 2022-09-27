let arr=[];
var a = [
    {
        name: "venkat",
        age: 25
    },
    {
        name: "venkat1",
        age: 26,
        salary:10000
    },
    {
        name: "venkat2",
        age: 27
    }]
    a.map((data)=>{
        arr.push(data.name,data.age)
    })
console.log(arr); //[ 'venkat', 25, 'venkat1', 26, 'venkat2', 27 ]
