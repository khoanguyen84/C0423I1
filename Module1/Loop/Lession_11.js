// Bài 11: Tính S(n) = 1 + 1.2 + 1.2.3 + … + 1.2.3….N
// Tính S(5) = 1 + 1.2 + 1.2.3 + 1.2.3.4 + 1.2.3.4.5
// 1 -> 5
//      1 -> i (i = [1, 5])
let n = 5;
let total = 0;
let factorial = 1;
// for(let i = 1; i <= n; i++){ // i = 3
//     factorial = 1;
//     for(let j = 1; j <= i; j++){ // j = 1 -> 3
//         factorial = factorial * j; // j = 1 -> fa = 1
//                                     // j =2 -> fa = 2
//                                     // j =3 -> fa = 6
//     }
//     total = total + factorial;
// }

// for(let i = 1; i <= n; i++){ // i = 3
//     factorial = 1;
//     let j = 1;
//     while(j <= i){
//         factorial = factorial * j;
//         j++
//     }
//     total = total + factorial;
// }
let i = 1;
do {
    factorial = 1;
    let j = 1;
    while (j <= i) {
        factorial = factorial * j;
        j++;
    }
    total = total + factorial;
    i++;
}
while (i <= n)
// for(let i = 1; i <= n; i++){ // i = 3
//     factorial = 1;
//     let j = 1;
//     while(j <= i){
//         factorial = factorial * j;
//         j++
//     }
//     total = total + factorial;
// }



console.log(total);