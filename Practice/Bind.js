// var pokemon={
//     firstname:'pika',
//     lastname:'chu',
//     getPokeName:function(){
//         var fullname=this.firstname + ' ' + this.lastname;
//         return fullname;
//     }
// }
// var pokemonName=function(){
//     console.log(this.getPokeName() + 'I choose you!');
// }
// var logPokemon=pokemonName.bind(pokemon);
// logPokemon();

var pokemon={
    firstname:'pika',
    lastname:'chu',
    getPokeName:function(){
        var fullname=this.firstname + ' ' + this.lastname;
        return fullname;
    }
}
var pokemonName=function(snack,hobby){
    console.log(this.getPokeName() +' ' + 'I choose you!');
    console.log(this.getPokeName() +' ' + 'loves' +' '+ snack +' '+ ' and ' + hobby);
}
var logPokemon=pokemonName.bind(pokemon);
logPokemon('sushi','algorithms');