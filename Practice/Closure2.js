function makeFunc(){
    var name="JS Nuggets";
    function displayName(){
        console.log(name);
    }
    return displayName;
}
var myFunc=makeFunc();
myFunc();

/* Anonymous Function */
// var counter=(function(){
//     var privateCounter=0;
//     function changeBy(val){
//         privateCounter += val; //privateCounter=privateCounter+val;
//     }
//     return{
//         increment: function(){
//             changeBy(1);
//         },
//         decrement:function(){
//             changeBy(-1);
//         },
//         value:function(){
//             return privateCounter;
//         }
//     };
// })
// console.log(counter);
// console.log(counter.value());
// counter.increment();
// counter.increment();
// counter.increment();
// console.log(counter.value());
// counter.decrement();
// counter.decrement();
// console.log(counter.value());
