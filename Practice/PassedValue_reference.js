/* Primitive datatype Passed by Value */
var y = 234; // y pointing to address of the value 234
var z = y;     
// var y = #8454; // y pointing to address of the value 234
// var z = y;    
// var z = #5411; // z pointing to a completely new address of the value 234  
// Changing the value of y
y = 23;
console.log(z);  // Returns 234, since z points to a new address in the memory so changes in y will not effect z
console.log(z);  // Returns 234, since z points to a new address in the memory so changes in y will not effect z
console.log(y);

/* Non-primitive datatype Passed by Reference */
var obj = { name: "Vivek", surname: "Bisht" };
var obj2 = obj;
// var obj = #8711;  // obj pointing to address of { name: "Vivek", surname: "Bisht" }
// var obj2 = obj; 
// var obj2 = #8711; // obj2 pointing to the same address 
// changing the value of obj1
        
obj.name = "Akki";
console.log(obj2);
console.log(obj);
        
// Returns {name:"Akki", surname:"Bisht"} since both the variables are pointing to the same address.
