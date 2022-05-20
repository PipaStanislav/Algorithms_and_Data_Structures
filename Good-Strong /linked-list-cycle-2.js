const detectCycle = (head) => {
    const heads = [];

    while(head) {
        if (heads.includes(head)) {
            return head;
        }

        heads.push(head);
        head = head.next;
    }

    return null;
};

const result = detectCycle([3,2,0,-4], 1);
console.log('--------> result', result);


const detectCycle2 = (head) => {
    while(head) {
        if (head.isColled) {
            return head;
        }

        head.isColled = true;
        head = head.next;
    }

    return null;
};

const result2 = detectCycle2([3,2,0,-4], 1);
console.log('--------> result2', result2);