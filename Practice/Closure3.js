function doAddition(x){
return function(y){
  return x+y;
}
}
// var add=doAddition(4);
// console.log(add());
// console.log(add(5));


console.log(doAddition(5)(5));
