function fibonacci(num){
var a=0;
var b=1;
var next;
for(let i=0;i<num;i++){
    next=a+b;
    a=b;
    b=next;
}
return b;
}
console.log("Fibonacci(5):"+fibonacci(5));

// const number = parseInt(prompt('Enter the number of terms: '));
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');

// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }