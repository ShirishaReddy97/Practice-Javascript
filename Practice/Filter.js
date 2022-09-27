// let nums=[12,34,56,78,91,25];
// nums.filter(n=>n%2===0)
// .forEach(n=>{
//     console.log(n);
//     console.log(n*2);
// })

// const arr=[5,1,3,2,6];

const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
  ];
  
  const studentGrades = students.filter(student => student.grade >= 90);
  console.log(studentGrades); // [ { name: 'Quincy', grade: 96 }, { name: 'Alexis', grade: 100 }, { name: 'Katie', grade: 90 } ]