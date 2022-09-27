
const hasMeeting=false;
const meeting=new Promise((resolve,reject)=>{
    if(!hasMeeting){
        const meetingDetails={
            name:'Marketing Meeting',
            location:'Skype',
            time:'1:00 PM'
        }
        resolve(meetingDetails);
    }else{
        reject(new Error('Meeting already scheduled'))
    }
});
// const addToCalendar=meetingDetails=>{
//     return new Promise((resolve,reject)=>{
//         const calendar=`${meetingDetails.name} is scheduled at ${meetingDetails.time} on ${meetingDetails.location}`;
//         resolve(calendar);
//     })
// }
const addToCalendar=meetingDetails=>{
    const calendar=`${meetingDetails.name} is scheduled at ${meetingDetails.time} on ${meetingDetails.location}`;
return Promise.resolve(calendar);
}

meeting
.then(addToCalendar)
.then(res=>{
    console.log('Meeting Scheduled');
    console.log(res);
})
.catch(err=>{
    console.log(err.message);
});

/*Callback*/
// const names=["shirisha","manisha","suvarna"];
// const greet=names.map(name =>`Hello ${name}`);
// console.log(greet);

/*named function*/
// function greeting(name){
//     console.log(`Hello ${name}`)
// }
// greeting('Shirisha');

/*Arrow function*/
// let greeting=name=>console.log(`Hello ${name}!`);
// greeting('Shirisha');

/*callback function */
// let greeting=name=>console.log(`Hello ${name}!`);
// const userInfo=(firstName,lastName,callback)=>{
//     const fullName=`${firstName} ${lastName}`
//     callback(fullName);
// }
// userInfo('Shirisha','Reddy',greeting);

/*Callback function */
// doSomething(function(result){
//     doSomethingElse(result,function(newResult){
//         doThirdThing(newResult,function(finalResult){
//             console.log('Got the final result:'+finalResult);
//         },failureCallback);
//     },failureCallback);
// },failureCallback);

// const promise1=Promise.resolve('Promise 1 Complete');
// const promise2=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res('Promise 2 Complete');
//     },2000);
// });
// // promise1.then(res>console.log(res));
// // promise2.then(res>console.log(res));

// Promise.all([promise1,promise2]).then(res=>console.log(res));
// Promise.race([promise1,promise2]).then(res=>console.log(res));

function* generatorFunc(){
    let data=getData();
    yield data;
    console.log(data)
}


 
