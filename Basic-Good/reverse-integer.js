const reverse = (x) => {
    const unsignedX = x * Math.sign(x);
    const res = unsignedX.toString().split('').reverse().join('') * Math.sign(x);

    return res < -2147483648 || res > 2147483647 ? false : res;
};

const result = reverse(-123);
console.log('--------> result', result);

const reverse2 = (x) => {
    const res = x < 0 ?
        -(x - x * 2).toString().split('').reverse().join('') :
        x.toString().split('').reverse().join('');

    return res < -2147483648 || res > 2147483647 ? false : res;
};

const result2 = reverse2(-123);
console.log('--------> result2', result2);