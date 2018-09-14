// parameters are what you define a function with. arguments are what you invoke a function with
// return set the value of a function and exits the function. consolelog only logs a message in the console
// the function can be used in an expression or inside of other functions


const checkPalindrome = (str) => {
    const arr = str.split('');
    const reverseArr = arr.reverse();
    const reverseStr = reverseArr.join('');
    if (str === reverseStr){
        console.log(`${str} is a palindrome`);
        return true;
    } else {
        console.log(`${str} is not a palindrome`);
        return false;
    }
}

checkPalindrome('racecar');
checkPalindrome('hello');

const sumDigits = (num) => {
    const numString = String(num);
    const digits = numString.split('');
    let total = 0;
    for (let i = 0; i < digits.length; i++){
        total +=(Number(digits[i]));
    }
    return total;
}

console.log(sumDigits(42));

const calculateSide = (sideA, sideB) => {
    const cSquared = Math.pow(sideA, 2) + Math.pow(sideB, 2);
    const sideC = Math.sqrt(cSquared);
    return sideC;
}
console.log(calculateSide(3,4));

const sumArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

console.log(sumArray([1,2,3,4,5]));

const checkPrime = (num) => {
    for ( let i = 2; i <= Math.sqrt(num); i++){
        if (num%i === 0){
            return false;
        }
    }
    return true;
}
console.log(checkPrime(9));

const PrintPrimes = (num) => {
    for( let i = 1; i <= num; i ++){
        if(checkPrime(i)){
            console.log(i);
        }
    }
}

PrintPrimes(97);


