const addBinary = (a, b) => {
    const rA = a.split('').reverse().join('');
    const rB = b.split('').reverse().join('');
    const l = a.length > b.length ? a.length : b.length;
    const result = [];

    for (let i = 0; i < l; i++) {
        const num1 = +rA[i] || 0;
        const num2 = +rB[i] || 0;
        const summ = (+result[i] || 0) + num1 + num2;

        if (summ >= 2) {
            result[i] = summ % 2;
            result.push(1)
        } else {
            result[i] = summ;
        }
    }

    return result.reverse().join('');
};