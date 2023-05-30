let numberOfPrime = 10;
let countOfPrime = 0;
let isPrime = true;
// for (let number = 2; countOfPrime < numberOfPrime ; number++) {
//     isPrime = true;
//     // check number is prime?
//     for(let i = 2; i < number; i++){
//         if(number % i == 0){
//             isPrime = false;
//             break;
//         }
//     }
//     // number is prime
//     if(isPrime == true){
//         console.log(number);
//         countOfPrime++;
//     }
// }
let number = 2;
while (countOfPrime < numberOfPrime) {
    isPrime = true;
    // check number is prime?
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    // number is prime
    if (isPrime == true) {
        console.log(number);
        countOfPrime++;
    }
    number++;
}