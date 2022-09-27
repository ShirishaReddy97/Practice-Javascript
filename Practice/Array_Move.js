var arr=[4,0,1,0,6];
Array.prototype.move = function(from,to){
  this.splice(to,0,this.splice(from,1)[0]);
  return this;
};
arr.move(2,1);
arr.move(4,2);
console.log(arr);

// prototype allows you to add new properties and methods to arrays.
// prototype is a property available with all JavaScript objects.