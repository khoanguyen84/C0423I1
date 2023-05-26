let students = ["Tuấn", "Duy", "Đạt", "Phúc", "Khánh", "Trung"]

// for(let index in students){
//     console.log(`${index}-${students[index]}`);
// }

// for(let student of students){
//     console.log(`${students.indexOf(student)}-${student}`);
// }

students.forEach(function(student, index){
    console.log(`${index}-${student}`);
})