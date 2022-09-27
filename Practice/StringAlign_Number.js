function align(words){
    var str=words.split('');
    var arr=[];
    console.log(str)
    for(var i=0;i<str.length;i++){
      var sorted=str[i].split('').sort();
      arr.push(sorted);
    }
  var newarr=[];
  for(var j=0;j<arr.length;i++){
    newarr +=arr[j].join('')+'';
  }
  console.log(newarr.trim().split('').sort().join(''));
  }
  align("is2 Thi1s T4est 3a");