//Bài 12: Tính S(n) = x + x^2 + x^3 + … + x^n
//Bài 12: Tính S(5) = 7 + 7^2 + 7^3 + 7^4 + 7^5
console.log(7 + 7**2 + 7**3 + 7**4 + 7**5);
let n = 5;
let x = 7;
let total = 0;
let power = 1;
for(let i = 1; i <= n; i++){
    power = 1;
    for(let j = 1; j <= i; j++){
        power = power * x
    }
    total += power
}

console.log(total);