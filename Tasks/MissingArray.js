let a=["1","5","8","10"];
var d=[];
var missing=[];
for(let i=0;i<a.length;i++){
    d.push(parseInt(a[i]))
    }
    console.log(d)
for(let i=1;i<=d[d.length-1];i++){
    if(d.indexOf(i)==-1)
    missing.push(i);
}
// for(let i=1;i<=10;i++){
//     if(d.indexOf(i)==-1)
//     missing.push(i);
// }
console.log(missing);