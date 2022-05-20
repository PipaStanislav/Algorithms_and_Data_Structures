const restoreIpAddresses = (s) => {
    const result = [];

    if (s.length > 12 && s.length < 4) {
        return result;
    }

    const generator = (arr, str) => {
        if (arr.length === 3) {
            if (!isValid(str)) {
                return;
            }
            result.push([...arr, str]);
        }


        for (let i = 0; i < 3; i++) {
            const subString = str.slice(0, i + 1);

            if (!isValid(subString)) {
                continue;
            }

            generator([...arr, subString], str.slice(i + 1));
        }
    }

    const isValid = (str) => {
        return !(!str.length || +str > 255 || (str.length > 1 && str[0] === '0'));
    }

    generator([], s);

    return result.map(ip => ip.join('.'))
};

const result = restoreIpAddresses('25525511135');
console.log('--------> result', result);