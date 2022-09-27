// function stringRemove(str,char){
//     var text="";
//     for(let i=0;i<=str.length-1;i++){
//         var name=str[i];
//         for(let a=0;a<=str[i].length-1;a++){
//             if(name[a] != char){
//                 text += name[a];
//             }
//         }
//         text += ''
//     }
//     console.log(text);
// }
// stringRemove("Sreeramineni",'e'); //srraminni
function stringRemove(str,char){
    var text="";
    for(let i=0;i<=str.length-1;i++){
            if(str[i] != 'e'){
                text += ' ';
            }
    }
    console.log(text);
}
stringRemove("Sreeramineni",'e'); //srraminni



