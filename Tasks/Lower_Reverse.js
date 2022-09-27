function reverse(a){  
    let rev = "";      
     for (var i = a.length - 1; i >= 0; i--){         
       rev += a[i];  //rev=rev + a[i];
     }     
    return rev.toLowerCase();
  }
  console.log(reverse("ABCDEFGH"));