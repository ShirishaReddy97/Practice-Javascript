let displayColors=function(message,...Colors){
    console.log(message);
    console.log(Colors)
    console.log(arguments.length);
    for(let i in Colors){
        console.log(Colors[i]);
    }
}
let message='List of Colors'
displayColors(message,'Red');
displayColors(message,'Red','Blue');
displayColors(message,'Red','Blue','Green');