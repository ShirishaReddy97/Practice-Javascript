let a=["1","5","8","10"];
let b=[];
let large=0;
let large1=0;
for(i=0;i<a.length;i++){
b.push(parseInt(a[i]))
}
console.log(b)
for(val of b){
    if(val>large){
        large=val;
    }
}
for(val1 of b){
    if(val1>large1 && val1<large)
    large1=val1;
}
// console.log(large);
console.log(large1);