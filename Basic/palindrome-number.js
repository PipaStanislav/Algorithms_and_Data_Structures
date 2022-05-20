const isPalindrome = (value) => {
    return value == `${value}`.split('').reverse().join('');
};

const result = isPalindrome(121);

console.log('--------> result', result);