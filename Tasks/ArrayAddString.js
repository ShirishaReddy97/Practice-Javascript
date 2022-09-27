var b = ["Hello","Hello6","Hello2",12];
var sum=0;
var d=[]
for(value in b){
if(typeof b[value]==='string')
d.push(b[value])
}
d.map(val=>{
    let c=val.split('')
    for(i=0;i<c.length;i++){
        if(parseInt(c[i])){
            sum += parseInt(c[i])
        }
    }
})
console.log(sum)