let numbers = [3, 4, 5, 6, 5]
let numbers_2 = [10, 20, 30]
let jobs = ["react", "php", 'c shape', 'javascript']


// + reverse()
// jobs.sort();
// jobs.reverse();
// console.log(jobs);

// + sort()
// sắp xếp theo alphabel (mặc định)
// jobs.sort();
// console.log(jobs);

// sắp xếp theo thứ tự của số
let ages = [5, 10, 100, 3, 12, 35, 9]
// định nghĩa 1 hàm so sánh (compare)
function compare(n1, n2){
    return n2 - n1;
}
ages.sort(compare)
console.log(ages);

// + concat(): merge 1 hoặc nhiều mảng/phần tử và tạo ra 1 mảng mới
// let numbers_3 = numbers.concat(numbers_2, 100)
// console.log(numbers);
// console.log(numbers_2);
// console.log(numbers_3);

// + join(): convert các giá trị trong mảng thành 1 chuỗi và các phần tử phân cách với nhau bằng separator (mặc định là dấu phẩy)
// console.log(numbers.join(''));

// + toString(): convert các giá trị trong mảng thành 1 chuỗi và các phần tử phân cách với nhau bằng dấu phẩy
// console.log(numbers.toString());

// + splice()
// numbers.splice(2, 0, 1, 1, 1);
// console.log(numbers);

// let removeds = numbers.splice(1, 3)
// console.log(removeds);
// console.log(numbers);

// numbers.splice(numbers.length - 2, 2)
// console.log(numbers);

// numbers.splice(0, 2)
// console.log(numbers);

// + push(): thêm 1 hoặc nhiều phần tử vào cuối mảng và trả về độ dài mới của mảng
// let size =  numbers.push(6, 7)
// console.log(size);
// console.log(numbers);

// + unshift(): thêm 1 hoặc nhiều phần từ vào đầu mẳng và trả về độ dài mới của mảng
// let size = numbers.unshift(10, 20, 30);
// console.log(size);
// console.log(numbers);

// + pop(): xóa 1 phần tử cuối mảng và trả về phần tử đó
// let deleted = numbers.pop()
// console.log(deleted);
// console.log(numbers);

// + shift(): xóa 1 phần tử ở đầu mảng và trả về phần tử đó
// let deleted = numbers.shift();
// console.log(deleted);
// console.log(numbers);

