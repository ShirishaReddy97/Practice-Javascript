function prime(num){
    for(let i=2;i<num;i++){
        if(num%2==0){
            return false;
        }
        else{
            return true;
        }
    }
}
console.log(prime(5));
