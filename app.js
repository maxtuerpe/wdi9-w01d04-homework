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



