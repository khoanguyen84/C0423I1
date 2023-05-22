let fullname = 'Châu Dương';
let gender = false;
let married = true;

// Hello, Mr. Khoa Nguyễn
// Hello, Ms. Thư Lê
// Hello, Mrs. Thư Lê (married)

// if(gender == true){
//     console.log('Hello, Mr. ' + fullname);
// }
// else {
//     if(married == true){
//         console.log('Hello, Mrs. ' + fullname);
//     }
//     else {
//         console.log('Hello, Ms. ' + fullname);
//     }
// }

// (gender == true) ?
//     console.log('Hello, Mr. ' + fullname) :
//     (married == true) ?
//         console.log('Hello, Mrs. ' + fullname) :
//         console.log('Hello, Ms. ' + fullname)

console.log(`Hello, ${gender == true ? 'Mr' : married == true ? 'Mrs' : 'Ms'}. ${fullname}`);

// let a = 5;
// let b = 10;
// let c = 8

// 5x + 10 = 0
// 5x2 + 10x + 8 = 0
// (a + b)^2 = a^2 + 2xaxb + b^2
// (5 + 10)^2 = 5^2 + 2x5x10 + 10^2

// console.log('(' + a + ' + ' + b + ')^2 = ' + a + '^2 + 2x' + a + 'x' + b + ' + ' + b + '^2');
// console.log(`(${a} + ${b})^2 = ${a}^2 + 2x${a}x${b} + ${b}^2`);
// console.log(a + "x2 + " + b + "x + " + c + " = 0");
// console.log(`${a}x2 + ${b}x + ${c} = 0`);
// console.log(a + "x + " + b + " = 0");
// console.log(`${a}x + ${b} = 0`);