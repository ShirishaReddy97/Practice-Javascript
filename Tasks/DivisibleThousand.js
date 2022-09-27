let n=1000;
let arr=[]
for(i=2;i<n;i++){
    if(i%2==0 && i%3==0 && i%4==0 && i%5==0)
    arr.push(i)
}

console.log(arr)
