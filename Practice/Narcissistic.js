// function narcissistic(value) {
//     var val=(value + '').split('');
//     let sum=0;
//     for (var v of val){
//         const num=parseInt(v);
//         sum += Math.pow(num,val.length);
//         }
//         return sum === value;
//   }
// narcissistic(153);
function narcissistic(value) {
    const integerSet = value.toString().split('').map(Number);
    const pow = integerSet.length;
    const sum = integerSet.reduce((total, item) =>
        total + Math.pow(item, pow), 0);
    return sum == value;
}
console.log(narcissistic(153));
console.log(narcissistic(333));
console.log(narcissistic(7));