var arr=[1,2,3]; //[6,3,2]
var result=[];
arr.forEach((element,index,array)=>{
    var remove=arr.splice(index,1)
    result.push(arr.reduce((a,b)=>a*b));
    arr.unshift(remove);
});
console.log(result);
