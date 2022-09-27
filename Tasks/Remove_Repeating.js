function repeating(b){
    // var arr1=[];
    // for(let i=0;i<b.length;i++)
    // arr1.push(parseInt(b[i]));
    var arr=[];
    for (var i=0;i<b.length;i++)
        if(arr.indexOf(b[i]) === -1 && b[i] !== '')
        arr.push(b[i]);
        return arr
}
let arr1=repeating(["2","3","4","2","3"])
let arr2=[];
for(i=0;i<arr1.length;i++)
arr2.push(parseInt(arr1[i]));
console.log(arr2);

