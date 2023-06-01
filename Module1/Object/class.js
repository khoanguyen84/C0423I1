// định nghĩa class có 2 cách
// cách 1: dùng từ khóa function => gốc javascript
// cách 2: dùng từ khóa class => ECMA Script (ES)
// lưu ý, naming convension (PascalCase)
// trong 1 class (lớp) có 3 thành phần
// 1. contructor (nhân tử, phương thức khởi tạo)
// 2. properties (thuộc tính)
// 3. methods (hành động, phương thức)

// function Student(fullname, age, gender, dob){
//     // properties
//     this.fullname = fullname;
//     this.age = age;
//     this.gender = gender;
//     this.dob = dob;
//     // methods
//     this.introduction = function (){
//         console.log(`Hello, I'm ${this.gender ? 'Mr': 'Ms'}. ${this.fullname}`);
//     }
//     this.setEmail = function(email){
//         this.email = email
//     }
//     this.getEmail = function(){
//         console.log(this.email);
//     }
// }

class Student {
    constructor(fullname, age, gender, dob) {
        this.fullname = fullname;
        this.age = age;
        this.gender = gender;
        this.dob = dob;
    }
    // methods
    introduction() {
        console.log(`Hello, I'm ${this.gender ? 'Mr' : 'Ms'}. ${this.fullname}`);
    }
    setEmail(email) {
        this.email = email
    }
    getEmail() {
        console.log(this.email);
    }
}
let obj_1 = new Student("Duy", 20, true, "02/02/2000")
let obj_2 = new Student("Thư", 18, false, "03/03/2005")
obj_1.introduction();
obj_2.introduction();
// console.log(obj_1);
// obj_1.setEmail('duy@gmail.com')
// obj_1.getEmail()

// console.log(obj_2);
// obj_2.getEmail()