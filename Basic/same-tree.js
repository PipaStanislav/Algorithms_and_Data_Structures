var isSameTree = function(p, q) {
    return JSON.stringify(p) === JSON.stringify(q);
};

const result = isSameTree([1,2,3], [1,2,3]);
console.log('--------> result', result);

const isSameTreeV2 = (p, q) => {
    if (!p && !q) {
        return true;
    }

    if (!p || !q || p.val !== q.val) {
        return false;
    }

    return isSameTree2(p.left, q.left) && isSameTree2(p.right, q.right);
};

const resultV2 = isSameTree([1,3], [1,null,3]);
console.log('--------> result', resultV2);