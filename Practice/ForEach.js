// let nums=[12,34,56,78,90,20];
// nums.forEach(n=>{
//     console.log(n);
// })
// function practice (i){
//     return i+1;
// };

// var a = [ -1, 0, 1, 2, 3, 4, 5 ];
// var b = [ 0 ];
// var c = [ 0 ];
// console.log(a);
// b = a.forEach(practice);
// console.log("=====");
// console.log(a);
// console.log(b);
// c = a.map(practice);
// console.log("=====");
// console.log(a);
// console.log(c);

chars = ['Hello' , 'world!!!'] ;
    
var retVal = chars.forEach(function(word){
  console.log("Saving to db: " + word) 
})
  
console.log(retVal) //undefined