// let nums=[12,34,56,78,91,25];
// let result=nums.filter(n=>n%2===0)
// .map(n=>n*2)
// .reduce((a,b)=>a+b);
// console.log(result)
// var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

// var petCounts = pets.reduce(function(obj, pet){
//     if (!obj[pet]) {
//         obj[pet] = 1;
//     } else {
//         obj[pet]++;
//     }
//     return obj;
// }, {});

// console.log(petCounts); 
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum); // 10