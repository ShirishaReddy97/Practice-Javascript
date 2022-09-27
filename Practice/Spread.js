let displayColors=function(message,...Colors) //Rest
{
    console.log(message);
    for(let i in Colors){
        console.log(Colors[i]);
    }
}
let message='List of Colors'
let colorArray=['Orange','Yellow','Black']
displayColors(message,...colorArray) //Spread
