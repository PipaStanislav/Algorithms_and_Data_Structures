const hasPathSum = (root, targetSum) => {
    if (!root) {
        return false;
    }

    let isHasPath = false;

    const findPath = (node, summ) => {
        if (!node.left && !node.right) {
            if (node.val === summ) {
                isHasPath = true;
                return;
            }

            return;
        }

        if (node.left) {
            findPath(node.left, summ - node.val);
        }

        if (node.right) {
            findPath(node.right, summ - node.val)
        }
    }

    findPath(root, targetSum);
    return isHasPath;
};

const result = hasPathSum([5,4,8,11,null,13,4,7,2,null,null,null,1],22);
console.log('--------> result', result);