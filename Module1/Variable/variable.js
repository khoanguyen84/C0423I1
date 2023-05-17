// var vs let vs const
// scope (phạm vi)
//  + global (toàn cục)         - var
//  + local (cục bộ)            - let/const
//  + block code (khối lệnh)    - let/const
// var age;
// let age = 18;
{
    // console.log(age);
    {
        {
           var age = 30;
            console.log(age);
            {
                let age = 20;
                console.log(age);
            }
            console.log(age);
        }
    }
}

// const 1. phải khởi tạo giá trị ban đầu 2. không được gán lại

const slogan =  '1 + 1 = 2';
// slogan = '2 + 2 = 4';