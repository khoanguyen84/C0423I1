// let arr_cuong = ["CGH001", "Cường", "10/10/2000", true, "cuong@gmail.com"];
// console.log(arr_cuong[1]);

// let obj_cuong = {
//     email: "cuong@gmail.com",
//     gender: true,
//     dob: "10/10/2000",
//     studentCode: "CGG001",
//     name: "Cường",
// }

// console.log(obj_cuong['name']);
// console.log(obj_cuong.name);
// console.log(obj_cuong.email);

// let c0423i1 = [
//     ["CGH001", "Cường", "10/10/2000", true, "cuong@gmail.com"],
//     ["CGH002", "Khánh", "10/10/2000", true, "khanh@gmail.com"]
// ]

// console.log(c0423i1[1][4]);

// {
//     email: "cuong@gmail.com",
//     gender: true,
//     dob: "10/10/2000",
//     studentCode: "CGG001",
//     name: "Cường",
//     hobbies: ["Đá banh", "Bơi lội", "Đọc sách"],
//     languages: [
//         {
//             name: "English",
//             level: "B1"
//         },
//         {
//             name: "Jappanese",
//             level: "N5"
//         }
//     ]
// }
let c0423i1 = [
    {
        email: "cuong@gmail.com",
        gender: true,
        dob: "10/10/2000",
        studentCode: "CGG001",
        name: "Cường",
        hobbies: ["Đá banh", "Bơi lội", "Đọc sách"],
        avatar: 'https://i.pravatar.cc/150?img=15'
    },
    {
        name: "Khánh",
        gender: true,
        dob: "10/10/2000",
        email: "khanh@gmail.com",
        studentCode: "CGG002",
        hobbies: ["Đá banh", "Bơi lội", "Đọc sách"],
        avatar: 'https://i.pravatar.cc/150?img=10'
    },
    {
        name: "Duy",
        gender: true,
        dob: "10/10/2000",
        email: "duy@gmail.com",
        studentCode: "CGG003",
        hobbies: ["Đá banh", "Bơi lội", "Đọc sách"],
        avatar: 'https://i.pravatar.cc/150?img=20'
    }
]

// console.log(c0423i1[0].hobbies[1]);
// console.log(c0423i1[0].languages[1].level);

function renderStudents() {
    let htmls = c0423i1.map(function (student, index) {
        return `
            <tr>
                <td>${index + 1}</td>
                <td>${student.studentCode}</td>
                <td>${student.name}</td>
                <td>
                    <img class='avatar' src='${student.avatar}' alt='' />
                </td>
                <td>${student.gender ? 'Male' : 'Female'}</td>
                <td>${student.dob}</td>
                <td>${student.email}</td>
                <td>
                ${student.hobbies.map(function(hobby, index){
                    return `<p>${hobby}</p>`
                }).join('')}
                </td>
            </tr>
        `
    })
    document.getElementById('tbStudents').innerHTML = htmls.join('')
}

renderStudents()