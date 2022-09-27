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
// meeting
// .then(addToCalendar)
// .then(res=>{
//     console.log('Meeting Scheduled');
//     console.log(res);
// })
// .catch(err=>{
//     console.log(err.message);
// });
async function myMeeting(){
    try{
const meetingDetails=await meeting;
const message=await addToCalendar(meetingDetails);
console.log(message);
}catch(err){
    console.log(err.message);
}
}
// myMeeting().catch(err=>console.log(err.message));