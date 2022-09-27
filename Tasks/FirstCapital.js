let str='Shirisha Ayilreddy Gary';
// let regex=/\s/;
// let value=str.split(regex);
// let value1=value.reduce((val,word)=>val =val + word.slice(0,1),'')
// console.log(value1)
let val=''
let res=str.split(' ');
// console.log(res);
res.map((out)=>{
let FirstCapital=out[0];
val+=FirstCapital;
// console.log(val);

})
let output=val.split('').join('.');
console.log(output);
