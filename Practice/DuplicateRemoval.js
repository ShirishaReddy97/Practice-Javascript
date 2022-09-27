let chars = ["shirisha"];
let str=chars[0].split("");
// console.log(str);
// let rev=str.reverse();
// let join=rev.join("");
// console.log(join);

      /*Set*/
let uniqueChars = [...new Set(str)]; 
console.log(uniqueChars);

       /*Filter*/
// let uniqueChars=str.filter((c,index)=>{
//     return str.indexOf(c)===index;    
// })

   /*ForEach,Includes*/
// let uniqueChars = [];
// str.forEach((c) => {
//     if (!uniqueChars.includes(c)) {
//         uniqueChars.push(c);
//     }
// });

// console.log(uniqueChars);
// var x = "Int32,Int32,Int32,Int32,Int32,Int32,Int32,Int32,Int32,Double,Double,Double";
    
// var arr = x.split(',');
    
// x = arr.filter(function(value, index, self) { 
//     return self.indexOf(value) === index;
// }).join(',');
// console.log(x);