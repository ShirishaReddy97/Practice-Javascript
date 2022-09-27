// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// fruits.sort();
// fruits.reverse();
// console.log(fruits)
const points = [40, 100, 1, 5, 25, 10];
// points.sort();
points.sort(function(a, b){return a - b});  //ascending
console.log(points)
points.sort(function(a, b){return b - a});   //descending
console.log(points)
points.sort(function(a, b){return 0.5 - Math.random()}); //random
console.log(points)
function myArrayMin(arr) {
    return Math.min.apply(null, arr);
}
console.log(myArrayMin(points));
function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}
console.log(myArrayMax(points));