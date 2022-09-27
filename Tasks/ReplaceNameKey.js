let obj=[
    {
        name:"shirisha",
        address:"srd"
    },
    {
        name:"manisha",
        address:"hyd"
    },
    {
        name:"suvarna",
        address:"pma"
    }
];
let change = obj.find((arr) =>{
    return arr.name==='shirisha';
});
 obj.name='kruthika';
 console.log(obj);
let newObj=obj.map(({
    name:FullName,
    ...rest
})=>({
    FullName,
    ...rest
}));
console.log(newObj);



