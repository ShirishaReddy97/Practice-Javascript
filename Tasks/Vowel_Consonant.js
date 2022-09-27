let count=0;
let temp=0;
let vowel='aeiou'
let str="Hello Welcome to the World";
let arr=str.split(" ");
let arr1=[]
arr.forEach(data => {
    if (vowel.indexOf(data[data.length - 1]) > -1) {
        arr1.push(`${data}/`)
        count+=1;
    }
    else {
        // arr1.push(`${data}_`)
        temp+=1;
    }

})
console.log("The vowels count is" + count);
console.log("The consonants count is" + temp);
console.log(arr1.join(" "))