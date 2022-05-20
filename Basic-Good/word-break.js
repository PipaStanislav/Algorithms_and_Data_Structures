const wordBreak = (s, wordDict) => {
    let res = new Array(s.length).fill(false);
    res[s.length] = true;

    for (let i = s.length - 1; i >= 0; i--) {
        for (let word of wordDict) {
            if (i + word.length <= s.length && s.slice(i, i + word.length) === word) {
                res[i] = res[i + word.length];
                if (res[i]) {
                    break;
                }
            }
        }
    }

    return res[0];
};

const result = wordBreak("abcd", ["a","abc","b","cd"]);
console.log('--------> result', result);