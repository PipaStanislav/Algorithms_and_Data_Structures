const isValid = (string) => {
    const open = { '(': ')', '[': ']', '{': '}' };
    const close = { ')': '(', ']':'[', '}': '{' };
    const symbols = string.split('');

    if (symbols.length % 2 !== 0) {
        return false
    }

    const result = [];

    for (let i = 0; i < symbols.length; i++) {
        if (open[symbols[i]]) {
            result.push(symbols[i])
        }

        if (close[symbols[i]]) {
            if (result[result.length - 1] === close[symbols[i]]) {
                result.pop()
            } else {
                return false;
            }
        }
    }

    return !result.length;
};

const result = isValid('([}}])') ;

console.log('--------> result', result);