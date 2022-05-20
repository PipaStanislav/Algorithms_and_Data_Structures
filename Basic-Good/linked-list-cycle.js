const hasCycle = (head) => {
    while (head) {
        if (!head.val) {
            return true;
        }

        head.val = null;
        head = head.next;
    }

    return false;
};

const result = hasCycle([3,2,0,-4], 1);
console.log('--------> result', result);