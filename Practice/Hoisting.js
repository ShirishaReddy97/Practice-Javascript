/* Variable */
hoistedVariable = 3;
console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized	
var hoistedVariable;

/* Function */
hoistedFunction();  // Outputs " Hello world! " even when the function is declared after calling

function hoistedFunction(){ 
  console.log(" Hello world! ");
} 

// Hoisting takes place in the local scope as well
function doSomething(){
    x = 33;
    console.log(x);
    var x;
  } 
  doSomething();

//   var x;
//   console.log(x); // Outputs "undefined" since the initialization of "x" is not hoisted
//   x = 23;
//   "use strict";
// x = 23; // Gives an error since 'x' is not declared
// var x;
a=1;
console.log('a='+a);
var a;