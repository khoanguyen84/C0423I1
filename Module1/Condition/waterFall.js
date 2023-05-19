// averageScore
// => rank
// >=9 => xuất sắc
// >=8 => giỏi
// >=7 => khá
// >=5 => trung bình
// >=0 => yếu

// 8 <= x < 9
let aveScore = 5.9;
// if (aveScore >= 9) {
//     console.log("xuất sắc");
// }
// else {
//     if (aveScore >= 8 && aveScore < 9) {
//         console.log("Giỏi");
//     }
//     else {
//         if (aveScore >= 7 && aveScore < 8) {
//             console.log("Khá");
//         }
//         else {
//             if (aveScore >= 5 && aveScore < 7) {
//                 console.log("Trung bình");
//             }
//             else {
//                 console.log("Yếu");
//             }
//         }
//     }
// }


if (aveScore >= 9) {
    console.log("xuất sắc");
}
    else if (aveScore >= 8 && aveScore < 9) {
        console.log("Giỏi");
    }
        else if (aveScore >= 7 && aveScore < 8) {
            console.log("Khá");
        }
        else if (aveScore >= 5 && aveScore < 7) {
            console.log("Trung bình");
        }
            else {
                console.log("Yếu");
            }

