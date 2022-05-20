const searchInsert = (nums, target) => {
    let index = 0;

    for (; index < nums.length; index++) {
        if (nums[index] >= target) {
            break;
        }
    }

    return index;
};

const result = searchInsert([1,3,5,6], 7);
console.log('--------> result', result);

const searchInsert2 = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let midle = Math.floor((right - left) / 2);

        if (nums[midle] === target) {
            return midle;
        }

        if (nums[midle] > target) {
            right = midle - 1
        } else {
            left = midle + 1
        }

    }

    return left;
};

const result2 = searchInsert2([1,3,4,6,8,9], 0);
console.log('--------> result2', result2);