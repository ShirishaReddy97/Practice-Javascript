// let nums=[12,34,56,78,91,25];
// nums.filter(n=>n%2===0)
// .map(n=>n*2)
// .forEach(n=>{
//     console.log(n);
// })

// const arr=[5,1,3,2,6];
// function double(x){
//     return x*2;
// }
// function triple(x){
//     return x*3;
// }
// function binary(x){
//     return x.toString(2);
// }
// const output=arr.map((x)=>x*2) ;
// const output=arr.map(triple);
// const output=arr.map(binary);
// console.log(arr);
// console.log(output);
chars = ['Hello' , 'world!!!'] ;
    
 var lengths = chars.map(function(word){
   return word.length
 }) 
    
 console.log(lengths) //[5,8]