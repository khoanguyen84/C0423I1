// scope = pham vi (tầm ảnh hưởng của dữ liệu)

// global = toàn cục
// local = cục bộ
// block code = khối lệnh

// var
//  -> hoisting
//  -> tái sử dụng vùng nhớ
// let
//  -> không có hoisting
//  -> mỗi khi tạo thì phát sinh một vùng nhớ mới
// const (constant)
//  -> không có hoisting
//  -> readonly (đóng băng vùng nhớ)
// => giống nhau: các cách để khai báo biến (lưu trữ dữ liệu)

// global
// let age;
// console.log(age);
// {
//     {
//         let age = 20;
//         console.log(age);
//         {
//             // block-code
//             // var age = 18;
//             console.log(age);
//             let age = 180
//         }

//     }
// }
// console.log(age);

// const numbers = [1, 2, 3];
// numbers = [4, 5, 6]
// numbers[0] = 10
// console.log(numbers);

const obj = {
    name : "Tuấn"
}

obj.name = "Khoa"
console.log(obj);
// obj = {
//     age: 20
// }

// bind()
// call()
// apply()

// const func = function(){

// }

// func = function(){

// }