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
pokemonName.call(pokemon,'sushi','algorithms')
pokemonName.apply(pokemon,['sushi','algorithms'])