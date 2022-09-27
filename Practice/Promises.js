let p=new Promise((resolve,reject)=>{
    let a=1+1
    if(a==2){
        resolve('Success')
    }
    else{
        reject('Failed')
    }
})
p.then((message)=>{
    console.log('This is in the then ' + message);
})
p.catch((message)=>{
    console.log('This is in the catch ' + message)
})

// setTimeout(()=>{
//     console.log('Coffee');
// },3000);
// console.log('Toast');
// console.log('Eggs');